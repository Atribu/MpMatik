import React, { useEffect, useState } from 'react'
import Table from '../Components/PanelComponents.jsx/Table';
import { Link } from 'react-router-dom';

const Users = () => {
  const [list, setList] = useState([])

  const getUsers = async () => {
    const response = await fetch("/api/user/getir");
    const data = await response.json();

    if(data.success === false) {
      return;
    }
    setList(data)
  };

  useEffect(()=> {
    getUsers();
  },[]);

  const handleUserDelete = async (id) => {
    try {
      const response = await fetch(`/api/user/delete/${id}`, {
        method: "DELETE"
      });
      const data = await response.json();
      if(data.success===false) {
        console.log("Hata Var !");
        return;
      }
      setList((prev)=>prev.filter((liste)=>liste.id!==liste_id));
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(list);
  return (
    <>
      <div>Kullanıcılar</div>
      <Table 
        head={["ID", "Kullanıcı Adı", "Adı Soyadı", "Yetki", "Aksiyonlar"]} 
        body={
          list.map((item, index) => (
            [
              item._id,
              item.username,
              item.name,
              item.accessLevel,
              [
                <Link to={`${item._id}`}>Görüntüle</Link>,
                <button type='button' onClick={()=>{
                  const tempList = [...list];
                  tempList.splice(index, 1);
                  setList(tempList)
                }}>Sil</button>
              ]
            ]
          ))}>

      </Table>
    </>
    
  )
}

export default Users