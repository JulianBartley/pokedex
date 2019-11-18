var page = document.getElementById('project');
var icon = document.getElementById('pokemonClick')

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

let playerParty = document.getElementById('player-party')
let generateBtn = document.getElementById('generate-btn')

class Pokemon{
  constructor(name){
    this.name= name
    this.hp = 0
    this.attack = 0
    this.defense = 0
    this.abilities = []
  }
}

class Trainer{
  constructor(name){
    this.name = name
    this.pokemonList = []
  }
}
