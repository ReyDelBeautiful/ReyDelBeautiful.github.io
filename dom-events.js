
let muestra = document.createElement("div")
let mostrarEquipo = document.createElement("div")
let mostrarTeam = document.getElementById("mostrarTeam")
let pokedex = document.getElementById("pokedex")
let boton = document.getElementById("boton")
let boton2 = document.getElementById("boton2")
let pokedex151 = []
let marcaParaScroll = document.getElementById("equipo")

/*Interaccion con el usuario por SA*/
pokedex.addEventListener("click", (event) => {
    if (event.target.matches(".agregar")) {
     if(team.length<6)  {
      team.push(pokedex151[event.target.id])
        GuardarEnLocal()
        swal.fire(`Elegiste a ${pokedex151[event.target.id].name}`)
        LimpiarMuestra()
  equipo_creado(team)}
     else {
      Swal.fire({
        title: 'Tu equipo esta lleno',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Mostramelo',
        denyButtonText: `Borralo`,
      }).then((result) => {
        
        if (result.isConfirmed) {
          equipo.scrollIntoView();

        } else if (result.isDenied) {
          Swal.fire(`El equipo se ha borrado`)
          team.length = 0
          LimpiarMuestra()
        }
      })
    }
  } 
    if (event.target.matches(".stats")){
      Mostrar(event.target.id)
    }
  });
 

/*limpieza visual rapida*/
  boton.addEventListener("click",()=>
  {
    LimpiarMuestra()
    reinicio()
  })

