import React from 'react'

const TeklifForm = () => {
  return (
    <section>
        <h2>TEKLİF AL</h2>
        <form>
            <label htmlFor=""></label>
            <input type="text" name='id' placeholder='İsim Soyisim' required />

            <label htmlFor=""></label>
            <input type="text" name='company' placeholder='Şirket Adı' required />

            <label htmlFor=""></label>
            <input type="email" name='email' placeholder='Mail Adresi' required />

            <label htmlFor=""></label>
            <input type="phone" name='id' placeholder='Telefon Numarası' required />

            <label for="city">Şehir <span>*</span></label>
            <select id="city" required>
                        <option value="">Şehir Seçin</option>
                        <option value="ankara">Antalya</option>
                        <option value="Adana">Adana</option>
                        <option value="Adıyaman">Adıyaman</option>
                        <option value="Afyon">Afyon</option>
                        <option value="Ağrı">Ağrı</option>
                        <option value="Amasya">Amasya</option>
                        <option value="Ankara">Ankara</option>
                        <option value="Artvin">Artvin</option>
                        <option value="Aydın">Aydın</option>
                        <option value="Balıkesir">Balıkesir</option>
                        <option value="Bilecik">Bilecik</option>
                        <option value="Bingöl">Bingöl</option>
                        <option value="Bitlis">Bitlis</option>
                        <option value="Bolu">Bolu</option>
                        <option value="Burdur">Burdur</option>
                        <option value="Bursa">Bursa</option>
                        <option value="Çanakkale">Çanakkale</option>
                        <option value="Çankırı">Çankırı</option>
                        <option value="Çorum">Çorum</option>
                        <option value="Denizli">Denizli</option>
                        <option value="Diyarbakır">Diyarbakır</option>
                        <option value="Edirne">Edirne</option>
                        <option value="Elazığ">Elazığ</option>
                        <option value="Erzincan">Erzincan</option>
                        <option value="Erzurum">Erzurum</option>
                        <option value="Eskişehir">Eskişehir</option>
                        <option value="Gaziantep">Gaziantep</option>
                        <option value="Giresun">Giresun</option>
                        <option value="Gümüşhane">Gümüşhane</option>
                        <option value="Hakkari">Hakkari</option>
                        <option value="Hatay">Hatay</option>
                        <option value="Isparta">Isparta</option>
                        <option value="Mersin">Mersin</option>
                        <option value="İstanbul">İstanbul</option>
                        <option value="İzmir">İzmir</option>
                        <option value="Kars">Kars</option>
                        <option value="Kastamonu">Kastamonu</option>
                        <option value="Kayseri">Kayseri</option>
                        <option value="Kırklareli">Kırklareli</option>
                        <option value="Kırşehir">Kırşehir</option>
                        <option value="Kocaeli">Kocaeli</option>
                        <option value="Konya">Konya</option>
                        <option value="Kütahya">Kütahya</option>
                        <option value="Malatya">Malatya</option>
                        <option value="Manisa">Manisa</option>
                        <option value="Kahramanmaraş">Kahramanmaraş</option>
                        <option value="Mardin">Mardin</option>
                        <option value="Muğla">Muğla</option>
                        <option value="Muş">Muş</option>
                        <option value="Nevşehir">Nevşehir</option>
                        <option value="Niğde">Niğde</option>
                        <option value="Ordu">Ordu</option>
                        <option value="Rize">Rize</option>
                        <option value="Sakarya">Sakarya</option>
                        <option value="Samsun">Samsun</option>
                        <option value="Siirt">Siirt</option>
                        <option value="Sinop">Sinop</option>
                        <option value="Sivas">Sivas</option>
                        <option value="Tekirdağ">Tekirdağ</option>
                        <option value="Tokat">Tokat</option>
                        <option value="Trabzon">Trabzon</option>
                        <option value="Tunceli">Tunceli</option>
                        <option value="Şanlıurfa">Şanlıurfa</option>
                        <option value="Uşak">Uşak</option>
                        <option value="Van">Van</option>
                        <option value="Yozgat">Yozgat</option>
                        <option value="Zonguldak">Zonguldak</option>
                        <option value="Aksaray">Aksaray</option>
                        <option value="Bayburt">Bayburt</option>
                        <option value="Karaman">Karaman</option>
                        <option value="Kırıkkale">Kırıkkale</option>
                        <option value="Batman">Batman</option>
                        <option value="Şırnak">Şırnak</option>
                        <option value="Bartın">Bartın</option>
                        <option value="Ardahan">Ardahan</option>
                        <option value="Iğdır">Iğdır</option>
                        <option value="Yalova">Yalova</option>
                        <option value="Karabük">Karabük</option>
                        <option value="Kilis">Kilis</option>
                        <option value="Osmaniye">Osmaniye</option>
                        <option value="Düzce">Düzce</option>
                        
            </select>           

            <label htmlFor=""></label>
            <input type="text" name='id' placeholder='İsim Soyisim' required />

            <label htmlFor=""></label>
            <input type="text" name='id' placeholder='İsim Soyisim' required />

            <label htmlFor=""></label>
            <input type="text" name='id' placeholder='İsim Soyisim' required />

        </form>
    </section>
  )
}

export default TeklifForm