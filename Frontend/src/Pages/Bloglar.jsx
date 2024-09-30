import React, {useState, useEffect} from 'react'
import PanelTable from "../Components/PanelTable"
import { Link } from 'react-router-dom';

const Bloglar = () => {
  const [list,setList] = useState([]);

  const getBlogList = async () => {
    const response = await fetch("/api/blog/liste");
    const data = await response.json();

    if(data.succcess ===false) {
      return
    }

    setList(data);
  }

  useEffect(() => {
    getBlogList();
  },[]);



  return (
    <PanelTable
    head={["ID","İsim","Url","Aksiyonlar"]}
    body={
      list.map((item, index)=>(
        [
          item._id,
          item.title,
          item.url,
          [
            <Link to={`${item._id}`}>Görüntüle</Link>
            
          ]
        ]
      ))
    }
    >

    </PanelTable>
  )
}

export default Bloglar