
// Importando as tabelas do DB
const sala = require('../model/sala');

module.exports = {
    async sala(req, res){
        res.render('../views/cadastroSala');
    },

    async aluno(req, res){
        res.render('../views/cadastroAluno');
    }
}
