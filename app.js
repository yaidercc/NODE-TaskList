// Resources
require("colors");
const {inquirerMenu, pausa, leerInput, listadoTareasBorrar,mensajeConfirmacion,mostrarListadoChecklist} =require("./helpers/inquirer");
const { saveinfo,readDB } = require("./helpers/DML");
const Tareas = require("./models/tareas");

// Main code
const main =async()=>{
    console.clear();
    let opt='';
    const tareas = new Tareas();
    const readData = readDB();
    
    if(readData){
        tareas.importTaskFromArray(readData);
    }
    do{
        opt=await inquirerMenu();
        switch (opt) 
        {
            case '1':
                // crear opcion
                const data = await leerInput("Descripcion: ");
                tareas.createTask(data)
                break;
            case '2':
                tareas.completeList();
                break;
            case '3':
                tareas.listPendingAndCompleteTasks();
                break;
            case '4':
                tareas.listPendingAndCompleteTasks(false);
                break;
            case '5':
                const ids=await mostrarListadoChecklist(tareas.listadoArr);
                console.log(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id!=0) {
                    if(await mensajeConfirmacion()) {
                        tareas.deleteTask(id);
                        console.log("tarea eliminada")
                    }
                }
                break;
        }
        saveinfo(tareas.listadoArr);
        await pausa();
        
    }while(opt!=='0');
}

main();