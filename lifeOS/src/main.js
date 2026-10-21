const botonGuardarTarea = document.getElementById("btnGuardar")
const nombreTareaNueva = document.getElementById("nombreTarea")
const prioridadTareaNueva = document.getElementById("prioridadNueva")
const tareas = document.getElementById("listaTareas")


botonGuardarTarea.addEventListener("click", () => {
  if(nombreTareaNueva.value === ""){
    alert("Por favor, introduce un nombre para la tarea")
    return
  }else if(!prioridadTareaNueva.value){
    alert("Por favor, elija una prioridad")
    return
  }else{
    const prioridad = prioridadTareaNueva.value
    let clasePrio = ""
    if(prioridad == "Alta") clasePrio = "prioAlta"
    if(prioridad == "Media") clasePrio = "prioMedia"
    if(prioridad == "Baja") clasePrio = "prioBaja"
    const nuevaTarea = document.createElement("div")
    nuevaTarea.innerHTML=`<div class="cajaTarea">
        <h3>${nombreTareaNueva.value}</h3>
        <span class="${clasePrio}"> Prioridad ${prioridadTareaNueva.value}</span>
      </div>
    `
    tareas.appendChild(nuevaTarea)
    nombreTareaNueva.value = ""
    prioridadTareaNueva.selectedIndex = 0
  }

})
