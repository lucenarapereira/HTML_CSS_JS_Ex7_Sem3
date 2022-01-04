function InsertRow(){

  //Inicia os vetores vazios
  var List = [];
  var Object = {}; 

  //Valor inserido na caixa de texto
 var row = document.getElementById('rowInput').value; 

//Cria o elemento de texto
var text = document.createElement("text");
text.innerHTML = row;

 //Validação se não está vazio
 if(row==""){
 alert('Preencha o item!'); 
 }else{  
 List.push(List.length+1, row);
 }
       
 console.log(row.length);
 
 //Cria a lista
 var table = document.createElement('li');
   
 //Insere os itens na lista
 var ul = document.getElementById('tableList');
     ul.appendChild(table);
     table.appendChild(text); 
}