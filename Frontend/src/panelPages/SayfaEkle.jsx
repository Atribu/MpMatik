import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import "../Styles/SorTable.scss";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase.js"; // Firebase ayarları

const SayfaEkle = () => {
  const [form, setForm] = useState({});
  const [comps, setComps] = useState([
    {
      id: 1,
      modulName: "Header",
      inputs: [
        { label: "input", type: "file", placeholder: "Logo", name: "logo" },
        { label: "input", type: "text", placeholder: "Menü", name: "menu" },
        { label: "select", placeholder: "Yazı Tipi", name: "fontFamily", options: ["Arial", "Georgia", "Courier New"] },
        { label: "color", placeholder: "Renk", name: "color" },
      ],
    },
    {
      id: 2,
      modulName: "İçerik",
      inputs: [
        { label: "input", name: "title", type: "text", placeholder: "Başlık" },
        { label: "textarea", name: "content", placeholder: "İçerik" },
        { label: "image", type: "file", name: "image", placeholder: "Resim Yükle" },
      ],
    },
    {
      id: 3,
      modulName: "Galeri",
      inputs: [
        { label: "image", type: "file", name: "galleryImages", placeholder: "Resim Yükle", multiple: true },
      ],
    },
  ]);
  const [useComps, setUseComps] = useState([]);
  const [menuItems, setMenuItems] = useState([""]); // Menü inputları
  const [imagePreview, setImagePreview] = useState(null); // Resim önizleme
  const [galleryPreviews, setGalleryPreviews] = useState([]); // Galeri önizlemeleri

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
              if (input.multiple) {
                const files = Array.from(e.target.files);
                const filePreviews = files.map(file => URL.createObjectURL(file));
                setGalleryPreviews(filePreviews); // Galeri önizlemelerini ayarla
                return { ...input, value: files }; // Dosyaları sakla
              } else {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImagePreview(reader.result); // Resim önizleme için
                };
                if (file) {
                  reader.readAsDataURL(file); // Resmi oku
                }
                return { ...input, value: file }; // Dosyayı sakla
              }
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
          // Yükleme ilerlemesi (opsiyonel)
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL); // URL döndür
          });
        }
      );
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // İçerik modülündeki image input’unu bul
    const contentModule = useComps.find((comp) => comp.modulName === "İçerik");
    const imageInput = contentModule.inputs.find((input) => input.name === "image");

    let imageUrl = "";
    if (imageInput && imageInput.value) {
      try {
        imageUrl = await handleUploadImage(imageInput.value); // Resmi Firebase'e yükle
        console.log("Yüklenen Resim URL'si:", imageUrl);
      } catch (error) {
        console.error("Resim yüklenirken bir hata oluştu:", error);
        return;
      }
    }

    // Galeri modülündeki resimleri yükle
    const galleryImages = useComps.find((comp) => comp.modulName === "Galeri");
    const galleryImageUrls = [];

    if (galleryImages && galleryImages.inputs[0].value) {
      const files = galleryImages.inputs[0].value;
      for (let file of files) {
        try {
          const url = await handleUploadImage(file); // Galeri resmini Firebase'e yükle
          galleryImageUrls.push(url); // URL'yi diziye ekle
        } catch (error) {
          console.error("Galeri resmi yüklenirken bir hata oluştu:", error);
          return;
        }
      }
    }

    // Resim URL'sini İçerik modülüne ekle
    const updatedUseComps = useComps.map((comp) => {
      if (comp.modulName === "İçerik") {
        return {
          ...comp,
          inputs: comp.inputs.map((input) =>
            input.name === "image" ? { ...input, value: imageUrl } : input
          ),
        };
      }
      if (comp.modulName === "Galeri") {
        return {
          ...comp,
          inputs: comp.inputs.map((input) =>
            input.name === "galleryImages" ? { ...input, value: galleryImageUrls } : input
          ),
        };
      }
      return comp;
    });

    const dataToSend = {
      ...form,
      components: updatedUseComps,
    };

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
                              <img
                                src={imagePreview}
                                alt="Önizleme"
                                style={{ maxWidth: "100%", maxHeight: "200px" }}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {item.modulName === "Galeri" && (
                <div className="menu-items">
                  {item.inputs.map((input) => (
                    <div key={input.name}>
                      {input.label === "image" && input.type === "file" && (
                        <>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) =>
                              handleInputChange(e, item.id, input.name)
                            }
                          />
                          {galleryPreviews.length > 0 && (
                            <div className="gallery-preview">
                              <h4>Yüklenen Galeri Resimleri:</h4>
                              {galleryPreviews.map((preview, index) => (
                                <img
                                  key={index}
                                  src={preview}
                                  alt={`Önizleme ${index + 1}`}
                                  style={{ maxWidth: "100px", margin: "5px" }}
                                />
                              ))}
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
