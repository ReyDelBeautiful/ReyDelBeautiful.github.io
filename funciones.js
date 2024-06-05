/*carga la pokedex*/
function MostrarPokedex(arr){
    
    for (let i = 0 ; i<arr.length;i++ ) {

        muestra.classList.add("box");
        muestra.innerHTML += `
        <div class="pokemon-card caja "  id="${arr[i].id-1}" >
        <img src="${arr[i].front_default}" class="pokemon-card img ${arr[i].type}" id="${arr[i].id-1}"  alt="${arr[i].name}">
        <h2 class="pokemon-card texto"  id="${arr[i].id-1}" >${arr[i].name} #${arr[i].id}</h2>
        <div> <button class="agregar" id="${arr[i].id-1}"> agregar </button>
              <button class="stats" id="${arr[i].id-1}"> info </button> </div>
        <div>
        `
     
    }
    pokedex.appendChild(muestra)
}

/*crea objetos pokemon*/
class Pokemon {

    constructor(id,name,image,type,hp,att,def,sa,sd,speed){


        this.id = id;
        this.name = name;
        this.image = image;  
        this.type = type;    
        this.hp = hp;
        this.att = att;
        this.def = def;
        this.sa = sa;
        this.sd = sd;
        this.speed = speed;
    }
}
function crear_pokemon (arr) {

    
    for (let i = 0 ; i<arr.length;i++ ) {
    let id = arr[i].id;
    let name = arr[i].name;
    let imagen = arr[i].front_default;
    let type = arr[i].type;
    let hp = arr[i].hp;
    let att = arr[i].att;
    let def = arr[i].def;
    let sa = arr[i].sa;
    let sd = arr[i].sd;
    let speed = arr[i].speed;
    
    let pokemon_nuevo =  new Pokemon (id,name,imagen,type,hp,att,def,sa,sd,speed);
    pokedex151.push(pokemon_nuevo);  
    
    
    
    }

}
/*muestra el equipo creado*/
function equipo_creado(arr) {
  for (let i = 0 ; i<arr.length; i++){
    mostrarEquipo.classList.add("box2");
    mostrarEquipo.innerHTML += `
    <div class="pokemon-card caja2"  id="${arr[i].id-1}" >
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${arr[i].id}.png" class="pokemon-card img" id="${arr[i].id-1}"  alt="${arr[i].name}">
    <h2 class="pokemon-card texto"  id="${arr[i].id-1}" >${arr[i].name} #${arr[i].id}</h2>
    <div>`}
    mostrarTeam.appendChild(mostrarEquipo)
  }

  /*muestra la info del pokemon*/
  function Mostrar(pkmid){

    
    Swal.fire({
  
      width: 900,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${pokedex151[pkmid].id}.png`,
      imageWidth: 200,
      
      html: `
      <div class="column"> 
       <h2>${pokedex151[pkmid].name}</h2>
      <div class="grid-2SA">
       <p>Ataque: ${pokedex151[pkmid].att} </p>
       <p>Ataque Especial: ${pokedex151[pkmid].sd} </p>
       <p>Defensa: ${pokedex151[pkmid].def} </p>
       <p>Defensa Especial: ${pokedex151[pkmid].sa} </p>
       <p>HP: ${pokedex151[pkmid].hp} </p>
       <p>Velocidad: ${pokedex151[pkmid].speed} </p>
      </div>
      </div>
      `
  })

  }

  /*revisa el storage y carga el equipo*/
  function YaHayEquipo(){
    
    if(equipoDeStorage){
        swal.fire(`ya hay un equipo previo, de tu ultima sesion`)
        equipo_creado(equipoDeStorage)

    }
  }
  YaHayEquipo()
  
  /*Limpia la tabla de team*/
  function LimpiarMuestra(){
    while (mostrarTeam.firstChild) {
        mostrarTeam.removeChild(mostrarTeam.firstChild)
      }
      mostrarEquipo.innerHTML= ` `
  }
  
  function reinicio(){
    team.length = 0
  }