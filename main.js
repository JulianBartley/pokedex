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


let all = []


queryPokemonAPI = async() => {
  let x = prompt('Choose your pokemon! ')
  // let x = Math.floor(math.random * 100) + 2
  let req =await fetch(`https://fizal.me/pokeapi/api/v2/id/${x}.json`);
  let data = await req.json()
  let name = data.name
  let hp = data.stats[5].base_stat
  let attack = data.stats[4].base_stat
  let defense = data.stats[3].base_stat


  let pok = new Pokemon(name, hp, attack, defense, )
  pok.display()

              // Pokemon Def: pokemon.stats.def
              // Pokemon atk: pokemon.stats.atk)
              console.log(data);
  }

  class Pokemon {
    constructor(name,hp, attack, defense, ){
      // this.image
      this.name = name
      this.hp = hp
      this.attack = attack
      this.defense = defense

    }
    display(){
      // let img = document.getElementById('image')
      // img.src = this.image
      let z = document.getElementById('div')
      z.innerText = this.name
      let hp = document.getElementById('div2')
      hp.innerText = this.hp
      let attack = document.getElementById('div3')
      attack.innerText = this.attack
      let defense = document.getElementById('div4')
      defense.innerText = this.defense
      // let ability = document.getElementById('div5')
      // ability.innerText = this.ability
    }

  }
  // console.log(data);
  // console.log(pokemon)
  // all.push(pokemon)

// createPokemon = (pokemon) => {
//   let x = document.getElementById('right')
//   x.innerText = `${pokemon.name}
//               Pokemon HP: ${pokemon.stats.hp}
//               Pokemon Def: ${pokemon.stats.def}
//               Pokemon atk: ${pokemon.stats.atk}`
// }
queryPokemonAPI()
