import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }
}

export default new Home();
