//pegar o input 
//Se for Sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database') //Importar o Arquivo de Dados para a Pagina
const readline = require('readline-sync') //Importa a Biblioteca ReadLine

const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponiveis:')

  //console.log('Produtividade', '/História brasileira','/Américas','/Estilo de vida','/Tecnologia')

  //Utilizando o MAP para Listar as Categoria
  const [{id, nome, autor, categoria, paginas, recomenda, leu}]  = livros
  livros.map(livro => console.log(livro.categoria))

  const entradaCategoria = readline.question('Qual categoria você escolhe:')

  //Tive que Renomear a Categoria Américas para Americas, nao estava trazedo por causa do acento
  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
  console.log('Essas são todos os livros disponiveis:')
  console.table(livrosOrdenados)
}