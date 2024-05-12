import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Douglas',
      sobrenome: 'de Souza',
      email: 'douglas@gmail.com',
      idade: 21,
      peso: 120,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new Home();
