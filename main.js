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
