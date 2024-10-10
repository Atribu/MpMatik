import React, { useEffect, useState } from 'react'
import { ReactSortable } from "react-sortable.js"

const SayfaEkle = () => {
    const [form, setForm] = useState({});
    const [comps, setComps] = useState([]);
    const [useComps, setUseComps] = useState([]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    };

    const handleInputChange = ( e, itemId, inputName ) => {
        const updatedUseComps = useComps.map( (item) => {
            if (item.id === itemId) {
                const updatedInputs = item.input.map( (input) => {
                    if ( input.name === inputName ) {
                        return { ...input, value: e.target.value };
                    }
                    return input;
                });
                return { ...item, input: updatedInputs };
            }
            return item; 
        });
        setUseComps( updatedUseComps );
    };

    const handleFormSubmit = async (e) => {
        e.prevenDefault();
        const dataToSend = { ...form, components: useComps };
        console.log( "Gönderilen Veri", dataToSend);
        try {
            const response = await fetch ( "/api/page/yeni", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });
            const data = await response.json();
            if ( data.success == false ) {
                console.log ( "Bir Sorun Var" );
                return;
            }
            console.log ( "Sayfa Başarı İle Oluşturuldu" );
        } catch (error) {
            console.log ( "Veri Gönderilmedi" );
        }
    }
  return (
    <>
        <ReactSortable tag = "ul" list={comps} setList={setComps} group={{ name: "shared", pull: "clone", pull: false }} className="sortable" >
            {
                comps.map( (item) => {
                    <li key={item.id}>
                        {item.modulName}
                    </li>
                })
            }
        </ReactSortable>
        <form onSubmit={handleFormSubmit}>
            <div>
                <input
                    type='text'
                    name="pageTitle"
                    id='title'
                    placeholder='Sayfa Başlığı'
                    onChange={handleChange}
                />
            </div>
        </form>
    </>
  )
}

export default SayfaEkle