import User from '../models/User';

class UserModel {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserModel();
