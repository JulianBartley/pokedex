

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
  let x = prompt('Choose your pokemon!')
  let req =await fetch(`https://fizal.me/pokeapi/api/v2/id/${x}.json`);
  let data = await req.json()

  let name = data.name
  let hp = data.stats[5].base_stat
  let attack = data.stats[4].base_stat
  let defense = data.stats[3].base_stat
  let ability = data.abilities[0].ability.name
<<<<<<< HEAD
  let img = data.sprites.front_default
=======
>>>>>>> 4a2fdb976b20560884ffa232398279df19659eb8


  let pok = new Pokemon(name, hp, attack, defense, ability )
  pok.display()

              // Pokemon Def: pokemon.stats.def
              // Pokemon atk: pokemon.stats.atk)
              console.log(data);
  }



  class Pokemon {
<<<<<<< HEAD
    constructor(name,hp, attack, defense, ability, img){
=======
    constructor(name,hp, attack, defense, ability){
>>>>>>> 4a2fdb976b20560884ffa232398279df19659eb8

      this.name = name
      this.hp = hp
      this.attack = attack
      this.defense = defense
      this.ability = ability
<<<<<<< HEAD
      this.img = img

=======
>>>>>>> 4a2fdb976b20560884ffa232398279df19659eb8


    }
    display(){

      let z = document.getElementById('div')
      z.innerText = this.name
      let hp = document.getElementById('div2')
      hp.innerText = `HP:  ${this.hp}`
      let attack = document.getElementById('div3')
      attack.textContent = `ATTACK: ${this.attack}`
      let defense = document.getElementById('div4')
      defense.textContent = `DEFENSE:  ${this.defense}`
      let ability = document.getElementById('div5')
      ability.textContent = `ABILITY: ${this.ability}`
<<<<<<< HEAD
      let img = document.getElementById('img')
      img.textContent = `${this.img}`
=======
>>>>>>> 4a2fdb976b20560884ffa232398279df19659eb8
    }

  }
