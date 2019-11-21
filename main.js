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
// let playerParty = document.getElem entById('player-party')
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

// const generateUnits = (party, list) => {
//   for(name of list){
//     let unit = new Unit(name)
//     party.add(unit)
//   }
//   return true
// }

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

// let names = ['[]', '[]', '[]', '[]']
// let party = new Party('Team Mamba')
//


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
let senpaiArray = []

queryPokemonAPI = async() => {
  let x = prompt('Choose your pokemon! ')
  let req =await fetch(`https://fizal.me/pokeapi/api/v2/id/${x}.json`);
  let data = await req.json()
  let pokemon =  {
    name: data.name,
    link: data.sprites.font_default,
    stats:{
      hp: data.stats[5].base_stats,
      atk: data.stats[4].base_stats,
      def: data.stats[3].base_stats
    },
    abl: [data.abilities[0].ability.name]
  }
  console.log(data);
  senpaiArray.push(pokemon)
  createPkmn(pokemon)
}

createPkmn = (pokemon) => {
  let generate = document.createElement('footer')
  document.body.appendChild(generate)
  generate.classname = "generator"
  generate.innerText= `<p> ${pokemon.name}</p>
                        <p>  Pokemon HP: ${pokemon.stats.hp}
                          Pokemon Def: ${pokemon.stats.def}
                          Pokemon atk: ${pokemon.stats.atk}
                          Pokemon Abilities: ${pokemon.abl[0]} </p>`
}
