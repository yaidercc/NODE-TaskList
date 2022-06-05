const Tarea = require("./tarea.js");
require("colors");
class Tareas{
    
    _listado={};
    get listadoArr(){
        const listado=[];
        Object.keys(this._listado).forEach(key=> {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }
    constructor(){
        this._listado={};
    }
    /**
     * fill _listado object with all task of the data file
     * @param {*} tareas 
     */
    importTaskFromArray(tareas=[]){
        tareas.map(item=>{
            this._listado[item.id]=item;
        })
    }
    /**
     * create tasks
     * @param {*} desc task description
     */
    createTask(desc=''){
        const tarea= new Tarea(desc);
        this._listado[tarea.id]=tarea;
    }
    /**
     * List all task
     */
    completeList(){
        let i=0;
        console.log();
        Object.entries(this._listado).map(([key,item])=>{
            console.log(`${ (++i).toString().green }. ${ item.desc } :: ${ item.completadoEn ? "Completado".green : "Pendiente".red }`);
        })
    }
    /**
     * list done tasks
     */
    listPendingAndCompleteTasks(completado = true){
        let i=0;
        console.log();
        Object.entries(this._listado).map(([key,item])=>{
            if(completado) {
                if(item.completadoEn)console.log(`${ (++i).toString().green }. ${ item.desc } :: ${item.completadoEn.green}`);
            }else {
                if(!item.completadoEn)console.log(`${ (++i).toString().green }. ${ item.desc } :: ${"Pendiente".red}`);
            }
        });
    }
    /**
     * delete task of the object tasks
     * @param {*} id id task
     */

    deleteTask(id=""){
        if (this._listado[id]){
            delete this._listado[id];
        }
    }


}

module.exports=Tareas;