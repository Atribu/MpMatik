import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import "../Styles/SorTable.scss";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js"; // Firebase ayarlarını buradan import edin

const SayfaEkle = () => {
  const [form, setForm] = useState({});
  const [comps, setComps] = useState([
    {
      id: 1,
      modulName: "Header",
      inputs: [
        { label: "input", type: "file", placeholder: "Logo", name: "logo" },
        { label: "input", type: "text", placeholder: "Menü", name: "menu" },
      ],
    },
    {
      id: 2,
      modulName: "İçerik",
      inputs: [
        { label: "input", name: "title", type: "text", placeholder: "Başlık" },
        { label: "textarea", name: "content", placeholder: "İçerik" },
        {
          label: "image",
          type: "file",
          name: "image",
          placeholder: "Resim Yükle",
        },
      ],
    },
  ]);
  const [useComps, setUseComps] = useState([]);
  const [menuItems, setMenuItems] = useState([""]); // İlk menü elemanı boş input
  const [imagePreview, setImagePreview] = useState(null); // Resim önizleme durumu

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleAddMenuItem = () => {
    if (menuItems.length >= 6) {
      alert("Menüde en fazla 6 öğe olabilir.");
      return;
    }
    setMenuItems([...menuItems, ""]);
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
          if (input.name === inputName) {
            if (input.type === "file") {
              const file = e.target.files[0];
              const reader = new FileReader();

              reader.onloadend = () => {
                setImagePreview(reader.result); // Resim URL'sini ayarla
              };

              if (file) {
                reader.readAsDataURL(file); // Resmi okuyun
              }
              return { ...input, value: file }; // Dosyayı saklayın
            }
            return { ...input, value: e.target.value };
          }
          return input;
        });
        return { ...item, inputs: updatedInputs };
      }
      return item;
    });
    setUseComps(updatedUseComps);
  };

  const handleUploadImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const storageRef = ref(storage, `images/${new Date().getTime()}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Yükleme ilerlemesi (isteğe bağlı)
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatedUseComps = useComps.map((comp) =>
      comp.modulName === "Header" ? { ...comp, menuItems } : comp
    );

    const dataToSend = { ...form, components: updatedUseComps };
    
    // Resmi yükle ve URL'sini al
    const imageInput = useComps.find((comp) => comp.modulName === "İçerik").inputs.find(input => input.name === "image");
    if (imageInput && imageInput.value) {
      try {
        const imageUrl = await handleUploadImage(imageInput.value);
        dataToSend.image = imageUrl; // Yüklenen resmin URL'sini ekle
      } catch (error) {
        console.error("Resim yüklenirken bir hata oluştu:", error);
        return;
      }
    }

    console.log("Gönderilen Veri:", dataToSend);

    try {
      const response = await fetch("/api/page/yeni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      if (!data.success) {
        console.log("Bir Sorun Var: Bilinmeyen hata");
        return;
      }
      console.log("Sayfa Başarıyla Oluşturuldu:", data.page);
    } catch (error) {
      console.error("Veri Gönderilmedi:", error);
    }
  };

  return (
    <>
      <ReactSortable
        tag="ul"
        list={comps}
        setList={setComps}
        group={{ name: "shared", pull: "clone", put: false }}
        className="sortable"
      >
        {comps.map((item) => (
          <li key={item.id}>{item.modulName}</li>
        ))}
      </ReactSortable>

      <form className="form-sortable" onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            id="title"
            placeholder="Sayfa Başlığı"
            onChange={handleChange}
          />
          <input
            type="text"
            id="url"
            placeholder="Sayfa URL"
            onChange={handleChange}
          />
        </div>

        <ReactSortable
          tag="ul"
          list={useComps}
          setList={setUseComps}
          group={{ name: "shared", pull: true, put: true }}
          className="sortable"
          animation={200}
          onEnd={() => console.log("Bileşen taşındı")}
        >
          {useComps.map((item) => (
            <li key={item.id}>
              <h2>{item.modulName}</h2>
              {item.modulName === "Header" && (
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
              {item.modulName === "İçerik" && (
                <div className="menu-items">
                  {item.inputs.map((input) => (
                    <div key={input.name}>
                      {input.label === "input" && (
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          value={input.value || ""}
                          onChange={(e) =>
                            handleInputChange(e, item.id, input.name)
                          }
                        />
                      )}
                      {input.label === "textarea" && (
                        <textarea
                          placeholder={input.placeholder}
                          value={input.value || ""}
                          onChange={(e) =>
                            handleInputChange(e, item.id, input.name)
                          }
                        />
                      )}
                      {input.label === "image" && input.type === "file" && (
                        <>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleInputChange(e, item.id, input.name)
                            }
                          />
                          {imagePreview && (
                            <div className="image-preview">
                              <h4>Yüklenen Resim Önizlemesi:</h4>
                              <img src={imagePreview} alt="Önizleme" style={{ maxWidth: "100%", maxHeight: "200px" }} />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
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
