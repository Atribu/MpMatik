import User from "../models/user.js"

export const getirUsers = async (request, response, next) => {
    try {
        const users = await User.find();
        return response.status(201).json(users)
    } catch (error) {
        next(error)
    }
}


export const duzenleUser = async (request, response, next) => {
    try {
        const userId = request.params.id;
        const user = await User.findOneAndUpdate(
            { id: userId },  // URL'ye göre bulma
            { $set: request.body },  // Güncellenecek veriler
            { new: true }  // Güncellenmiş dokümanı döndür
        );
        return response.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export const userIdGetir = async (request, response, next) => {
    try {
      const user = await User.findById(request.params.id);
      if (!user) {
        return response.status(404).json({ success: false, message: 'User bulunamadı' });
      }
      return response.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };


export const silUsers = async (request, response, next) => {
    try {
        const user = await User.findByIdAndDelete(request.params.id);
        response.status(201).json("Başarıyla Silindi");
    } catch (error) {
        next (error)
    }
}

export const getUserInfo = async (req, res) => {
    try {
      const userId = req.user.id;  // Token'den gelen kullanıcı ID'si
      const user = await User.findById(userId);  // Kullanıcıyı MongoDB'den bul
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'Kullanıcı bulunamadı.' });
      }
  
      res.json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Sunucu hatası.' });
    }
  };