let team =[]
let equipoDeStorage = JSON.parse(localStorage.getItem("team"))
function GuardarEnLocal(){
    localStorage.setItem("team",JSON.stringify(team))
}
function RecibirDelLocal(){
    localStorage.getItem("team", JSON.parse(team))
}

