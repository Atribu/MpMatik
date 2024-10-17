import React, { useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import "../Styles/SorTable.scss";

const SayfaEkle = () => {
  const [form, setForm] = useState({});
  const [comps, setComps] = useState([
    {
      id: 1,
      modulName: 'Header',
      inputs: [
        { label: 'input', type: 'file', placeholder: 'Logo', name: 'logo' },
        { label: 'input', type: 'text', placeholder: 'Menü', name: 'menu' },
      ],
    },
    {
      id: 2,
      modulName: 'İçerik',
      inputs: [
        { label: 'input', name: 'title', type: 'text', placeholder: 'Başlık' },
        { label: 'textarea', name: 'content', placeholder: 'İçerik' },
      ],
    },
  ]);
  const [useComps, setUseComps] = useState([]);
  const [menuItems, setMenuItems] = useState(['']); // İlk menü elemanı boş input

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleAddMenuItem = () => {
    if (menuItems.length >= 6) {
      alert('Menüde en fazla 6 öğe olabilir.');
      return;
    }
    setMenuItems([...menuItems, '']);
  };

  const handleMenuItemChange = (e, index) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index] = e.target.value;
    setMenuItems(newMenuItems);
  };

  const handleInputChange = (e, itemId, inputName) => {
    const updatedUseComps = useComps.map((item) => {
      if (item.id === itemId) {
        const updatedInputs = item.inputs.map((input) => {
          if (input.name === inputName) return { ...input, value: e.target.value };
          return input;
        });
        return { ...item, inputs: updatedInputs };
      }
      return item;
    });
    setUseComps(updatedUseComps);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatedUseComps = useComps.map((comp) =>
      comp.modulName === 'Header' ? { ...comp, menuItems } : comp
    );

    const dataToSend = { ...form, components: updatedUseComps };
    console.log('Gönderilen Veri:', dataToSend);

    try {
      const response = await fetch("/api/page/yeni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      if (!data.success) {
        console.log('Bir Sorun Var: Bilinmeyen hata');
        return;
      }
      console.log('Sayfa Başarıyla Oluşturuldu:', data.page);
    } catch (error) {
      console.error('Veri Gönderilmedi:', error);
    }
  };

  return (
    <>
      <ReactSortable
        tag="ul"
        list={comps}
        setList={setComps}
        group={{ name: 'shared', pull: 'clone', put: false }}
        className="sortable"
      >
        {comps.map((item) => (
          <li key={item.id}>{item.modulName}</li>
        ))}
      </ReactSortable>

      <form className="form-sortable" onSubmit={handleFormSubmit}>
        <div>
          <input type="text" id="title" placeholder="Sayfa Başlığı" onChange={handleChange} />
          <input type="text" id="url" placeholder="Sayfa URL" onChange={handleChange} />
        </div>

        <ReactSortable
          tag="ul"
          list={useComps}
          setList={setUseComps}
          group={{ name: 'shared', pull: true, put: true }}
          className="sortable"
          animation={200}
          onEnd={() => console.log('Bileşen taşındı')}
        >
          {useComps.map((item) => (
            <li key={item.id}>
              <h2>{item.modulName}</h2>
              {item.modulName === 'Header' && (
                <div className="menu-items">
                  <h3>Menü Öğeleri</h3>
                  {menuItems.map((menuItem, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={`Menü öğesi ${index + 1}`}
                      value={menuItem}
                      onChange={(e) => handleMenuItemChange(e, index)}
                    />
                  ))}
                  <button type="button" onClick={handleAddMenuItem}>
                    Menü Öğesi Ekle
                  </button>
                </div>
              )}
            </li>
          ))}
        </ReactSortable>

        <button type="submit">Kaydet</button>
      </form>
    </>
  );
};

export default SayfaEkle;
