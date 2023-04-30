module.exports = {
  dialect: 'postgres', // PRECISAMOS INFORMAR AO SEQUELIZE QUE TIPO DE SQL VAMOS USAR, NESTE CASO POSTGRES
  host: 'localhost', // LOCAL ONDE ESTAMOS USANDO NOSSA APLICAÇÃO
  username: 'postgres', // USUÁRIO QUE CRIAMOS NO DOCKER. EXEMPLO: SE FOI CRIADO hamburgueria-postgres => deverá colocar apenas postgres
  password: 'hamburgueria', // SENHA CRIADA NO MOMENTO DA CRIAÇÃO DO CONTAINER DOCKER.
  database: 'Hamburgueria', // NOME EXATO DO DATABASE CRIADO NO POSTBIRD
  define: {
    timestamps: true, // ADICIONA UM PADRÃO DE INFORMAÇÃO DE CRIAÇÃO DE USUÁRIOS E ADICIONA UMA DATA DE CRIAÇÃO DO CADASTRO E DATA DE UPDATE
    underscored: true,
    underscoredAll: true,
    // underscored, underscoredAll => FAZ COM QUE A CRIAÇÃO NO BANCO DE DADOS SEJA PADRONIZADA ASSIM: EM CAIXA BAIXA E COM PADRÃO SNAKECASE => EXEMPLO: user_product, e não userProduct.
  },
}
