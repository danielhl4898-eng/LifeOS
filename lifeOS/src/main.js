const botonGuardarTarea = document.getElementById("btnGuardar")
const nombreTareaNueva = document.getElementById("nombreTarea")
const prioridadTareaNueva = document.getElementById("prioridadNueva")
const fechaTareaNueva = document.getElementById("fechaTareaNueva")
const tareas = document.getElementById("listaTareas")
const descripcionTarea = document.getElementById("descripcionTarea")
const modalEditarTarea = document.getElementById("cambiarDesc")

const fechaHoy = new Date()
fechaHoy.setDate(0,0,0,0)

botonGuardarTarea.addEventListener("click", () => {
  if(nombreTareaNueva.value === ""){
    alert("Por favor, introduce un nombre para la tarea")
    return
  }else if(!prioridadTareaNueva.value){
    alert("Por favor, elija una prioridad")
    return
  }else if(fechaTareaNueva.value == ""){
    alert("Por favor, introduzca una fecha")
  }
  else{
    if(descripcionTarea.value ===""){
       descripcionTarea.value = "Sin descripción"
    }
    const prioridad = prioridadTareaNueva.value
    let clasePrio = ""
    if(prioridad == "Alta") clasePrio = "prioAlta"
    if(prioridad == "Media") clasePrio = "prioMedia"
    if(prioridad == "Baja") clasePrio = "prioBaja"
    const nuevaTarea = document.createElement("div")

/////
    let tareaPasada = ""
    if(fechaTareaNueva < fechaHoy){
      tareaPasada = "<span class='tareaPasada'>Fuera de plazo</span"
    }
/////
    nuevaTarea.innerHTML=`<div class="cajaTarea">
        <h3 id="nombreTareaNuevaEdit">${nombreTareaNueva.value}</h3>
        <p class="descripcionGuardada">${descripcionTarea.value}</p>
        <div class="filaInferior">
          <div class="grupoEtiquetas">
            <span class="${clasePrio}"> Prioridad ${prioridadTareaNueva.value}</span>
            <span class="estadoPendiente">Pendiente</span>
            <span class="fechaTareaDisplay">${fechaTareaNueva.value}</span>
            ${tareaPasada}
          </div>
          <div class="botonesTarea">
            <span> 
              <button class="botonCompletar">Marcar como completada</button> 
            </span>
            <span>
              <button class="botonEditar">Editar</button>
            </span>
          </div>
        </div>
      </div>
    `
    
    tareas.appendChild(nuevaTarea)
    const btnCompletar = nuevaTarea.querySelector(".botonCompletar")
    const btnEditar = nuevaTarea.querySelector(".botonEditar")
    let estadoTarea = nuevaTarea.querySelector(".estadoPendiente")
    let claseTarea = nuevaTarea.querySelector(".cajaTarea")
    btnCompletar.addEventListener("click", ()=>{
      if(estadoTarea.innerHTML == "Completada"){

        estadoTarea.innerHTML = "Pendiente"
        estadoTarea.className = "estadoPendiente" 
        btnCompletar.innerHTML = "Marcar como completada"
        claseTarea.className = "cajaTarea"

      }else if(estadoTarea.innerHTML =="Pendiente"){

        estadoTarea.innerHTML = "Completada"
        estadoTarea.className = "tareaCompletada" 
        btnCompletar.innerHTML = "Marcar como pendiente"
        claseTarea.className = "cajaTareaComp"

      }
    })

    const inputNuevoNombre = document.getElementById("nuevoNombre")
    const inputNuevaDesc = document.getElementById("nuevaDesc")
    const inputNuevaFecha = document.getElementById("nuevaFechaCambia")
    const botonGuardarEdit = document.getElementById("btnGuardarEdit")
    const botonCancelarEdit = document.getElementById("btnCancelar")
    let tareaEdit = nuevaTarea
    btnEditar.addEventListener("click", ()=>{
      modalEditarTarea.show()
    })

    botonCancelarEdit.addEventListener("click", ()=>{
      modalEditarTarea.close()
      inputNuevoNombre.value=""
      inputNuevaDesc.value=""
    })

    botonGuardarEdit.addEventListener("click", () => {
      if (inputNuevoNombre.value == "") {
        alert("Por favor, introduce un nombre para la tarea")
        return
      }
      tareaEdit.querySelector("h3").innerText = inputNuevoNombre.value
      tareaEdit.querySelector(".descripcionGuardada").innerHTML =inputNuevaDesc.value
      tareaEdit.querySelector(".fechaTareaDisplay").innerHTML = inputNuevaFecha.value
      modalEditarTarea.close()
    })
    nombreTareaNueva.value = ""
    descripcionTarea.value = ""
    fechaTareaNueva.value = ""
    prioridadTareaNueva.selectedIndex = 0
  }

})


