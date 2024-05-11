class Home {
  index(req, res) {
    res.json({
      'Tudo certo': true,
    });
  }
}

export default new Home();
