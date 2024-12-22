var carrinho = 0;
var divPagar = document.getElementById('carrinho-pagar');
var lista = []
var divPai = document.getElementById('item');
var grid = document.getElementById('itens');

var imagens = [
  'hamb-1.png',
  'hamb-2.png',
  'hamb-3.png',
  'hamb-4.png',
  'hamb-5.png',
  'hamb-1.png',
  'hamb-2.png',
  'hamb-8.png',
]




function adicionarNaLista(nome,preco,id,quantidade){
  cont = lista.length;
  let item = {nome,preco,id,quantidade}
  if(cont == 0){
    lista.push(item);
    hambuguerAdicionarLista();
    adicionarCarrinho();
    console.log('primeiro item da lista');
    console.log(lista[(lista.length)-1][3]);
    return;
  }
  for(let i = 0;i<cont;i++){
    if(item.id === lista[i].id){
      console.log(lista[i].quantidade)
      lista[i].quantidade++;
      console.log('esse item ja existe');
      hambugueratualizarLista(item.id);
      adicionarCarrinho();
      return;
    }
  }
  lista.push(item);
  hambuguerAdicionarLista();
  adicionarCarrinho();

  console.log(' item novo');
  return;

}

function hambuguerAdicionarLista(){
  let valor = lista.length;
  let copia = grid.cloneNode(true);
  copia.style.display = 'block';

  let nomeDoHambugues = copia.querySelector('.nomeHambugue');
  let quantidadeHambugue = copia.querySelector('.quantidadeHambugue');
  let unidadedeHambugue = copia.querySelector('.unidadedeHambugue');
  let preçodeHambugue = copia.querySelector('.preçodeHambugue');
  let imagemHamburger = copia.querySelector('.imagemHamburger');

  let img = document.createElement('img')

  imagemHamburger.src = 'imgs/' + imagens[valor-1];  
  nomeDoHambugues.innerHTML = lista[valor-1].nome;
  quantidadeHambugue.innerHTML = lista[valor-1].quantidade;
  unidadedeHambugue.innerHTML = lista[valor-1].preco;
  preçodeHambugue.innerHTML = lista[valor-1].quantidade*lista[valor-1].preco;

  copia.style.display = 'block'
  divPai.appendChild(copia);
}

function hambugueratualizarLista(id){
  tamanho = lista.length;
  for(let i = 0; i<tamanho;i++){
    if(id === lista[i].id){
      let quantidadeHambugue = document.querySelectorAll('.quantidadeHambugue');
      let preçodeHambugue = document.querySelectorAll('.preçodeHambugue');
      quantidadeHambugue[i+1].innerHTML = lista[i].quantidade;
      preçodeHambugue[i+1].innerHTML = lista[i].quantidade*lista[i].preco;
    }
  }
}

function removerHambugueradoCarrinho(){
  tamanho = lista.length;
  for(let i = 0; i<tamanho;i++){
    if(id === lista[i].id){
      lista[i].quantidade--;
      let quantidadeHambugue = document.querySelectorAll('.quantidadeHambugue');
      let preçodeHambugue = document.querySelectorAll('.preçodeHambugue');
      quantidadeHambugue[i+1].innerHTML = lista[i].quantidade;
      preçodeHambugue[i+1].innerHTML = lista[i].quantidade*lista[i].preco;
      return
    }
  }
}



function adicionarCarrinho(){
  carrinho++;
  document.getElementById('carrinho').innerHTML = carrinho;
  if(carrinho >= 3){
    document.getElementById('item').classList.add('rolagem');
  }
  else{
    document.getElementById('item').classList.remove('rolagem');
  }
}

function pagar(){
  divPagar.style.display = 'block';
}

function fecharComprar(){
  divPagar.style.display = 'none';
}
  



