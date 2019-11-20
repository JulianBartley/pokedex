// var page = document.getElementById('project');
// var icon = document.getElementById('pokemonClick')

function professorOakPage(){
  if (project.style.display === 'none'){
    project.style.display = "block";
    icon.style.display = 'none';
  }else {
    project.style.display = 'none';
  }
}

var goingForward = document.getElementById('yes');
var name = document.getElementById('trainerName')

function enterTrainer(){
  if (yes.style.display === 'block'){
    yes.style.display = "none";
    trainerName.style.display = 'block';
  }else {
    yes.style.display = 'block';
  }
}

//
// let playerParty = document.getElementById('player-party')
// let generateBtn = document.getElementById('generate-btn')
//
// generateBtn.addEventListener('click', () => {
//   let list = []
//   while (list.length < 3){
//     let person = prompt('Choose your Pokemon!')
//     list.push(person)
//   }
//   generateUnits(party, list)
// })
<<<<<<< HEAD

=======
//
>>>>>>> 1539cddb40c17188b1a9d8d8ba56632dab22ba76
// const generateUnits = (party, list) => {
//   for(name of list){
//     let unit = new Unit(name)
//     party.add(unit)
//   }
//   return true
// }
<<<<<<< HEAD

=======
//
>>>>>>> 1539cddb40c17188b1a9d8d8ba56632dab22ba76
// class Party{
//   constructor(name){
//     this.units = []
//   }
//
//   add(unit){
//     this.units.push(unit)
//     console.log(`${unit.name} has joined ${this.name}`)
//     this.drawUnitOnScreen(unit)
//   }
<<<<<<< HEAD

=======
//
>>>>>>> 1539cddb40c17188b1a9d8d8ba56632dab22ba76
//   drawUnitOnScreen(unit){
//     let li = document.createElement('li')
//     li.innerText = `${unit.name} -- HP: ${unit.hp}`
//     playerParty.appendChild(li)
//   }
// }
//
// class Unit{
//   constructor(name){
//   this.name = name
//   this.hp = 100
//   this.atk = 0
//   this.defense = 0
//   this.abilities = []
//  }
// }
//
<<<<<<< HEAD

// let names = ['[]', '[]', '[]', '[]']
// let party = new Party('Team Mamba')
//


=======
//
// let names = ['[]', '[]', '[]', '[]']
// let party = new Party('Team Mamba')
//
//
//
>>>>>>> 1539cddb40c17188b1a9d8d8ba56632dab22ba76
//
// function queryPokemonAPI() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       let text = this.responseText
// let data = JSON.parse(text)
// console.log(data)
//     }
//   };
//   xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/257.json", true);
//   xhttp.send();
// }
<<<<<<< HEAD

queryPokemonAPI = async() => {
  let x = prompt('Choose your pokemon! ')
  let website =await fetch(`https://fizal.me/pokeapi/api/v2/id/${x}.json`);
  let run = await req.JSON(website)
  let pokemon = await {
    name: data.name
  }
}



//const url = ""





=======
//
>>>>>>> 1539cddb40c17188b1a9d8d8ba56632dab22ba76
// function createNode(element) {
//       return document.createElement(element);
//   }
//
//   function append(parent, el) {
//     return parent.appendChild(el);
//   }
//
//   const ul = document.getElementById('authors');
//   const url = 'https://randomuser.me/api/?results=10';
//   fetch(url)
//   .then((resp) => resp.json())
//   .then(function(data) {
//     let authors = data.results;
//     return authors.map(function(author) {
//       let li = createNode('li'),
//           img = createNode('img'),
//           span = createNode('span');
//       img.src = author.picture.medium;
//       span.innerHTML = `${author.name.first} ${author.name.last}`;
//       append(li, img);
//       append(li, span);
//       append(ul, li);
//     })
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
