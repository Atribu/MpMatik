import React, {useState} from 'react'

const PanelTable = ({head, body, searchable}) => {

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState(false);

    const filteredBody = body.filter(
        items => items.some(item => item.toString().toLocaleLowerCase("TR").includes(search.toLocaleLowerCase("TR")))
    ).sort((a, b) => {
        if(sort?.orderBy === "ASC") {
            return a[sort.index].toString().localeCompare(b[sort.index]);
        }
        if(sort?.orderBy === "DESC") {
            return b[sort.index].toString().localeCompare(a[sort.index]);
        }
    })
  return (
    <>
        {
            searchable && <input type='search' defaultValue={search} placeholder='Arama' onChange={e => setSearch(e.target.value)} />
        }
        <table>
            {
                head && head.length>0 && (
                    <thead>
                        <tr>
                            {
                                head.map((item, index) => (
                                    <th key={index} onClick={() => {
                                        if(sort?.index == index) {
                                            setSort({
                                                index,
                                                orderBy: sort.orderBy === "ASC" ? "DESC" : "ASC"
                                            })
                                        } else {
                                            setSort({
                                                index,
                                                orderBy: "ASC"
                                            })
                                        }
                                    }}>{item}</th>
                                ))
                            }
                        </tr>
                    </thead>
                )
            }
            {
                filteredBody && filteredBody.length>0 && (
                    <tbody>
                        {
                            filteredBody.map((items, index) => (
                                <tr key={index}>
                                    {
                                        items.map((item, index) => (
                                            <td key={index}>
                                                {
                                                    (typeof item) == "string" ? (
                                                        item.search("jpg")!=-1 ? (<img src={item} alt='Görsel' width="200" height="100" />) : (item)
                                                    ) : (
                                                        item
                                                    )
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                )
            }
        </table>
    </>
  )
}

export default PanelTable