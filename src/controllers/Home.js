class Home {
  async index(req, res) {
    res.json('Ola');
  }
}

export default new Home();
