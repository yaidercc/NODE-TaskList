require("colors");
const {mostrarMenu, pausa}=require("./helpers/mensajes");
const main =async()=>{
    console.clear();
    console.log("Hola mundo");

    let opt='';
    while(opt!=='0'){
        opt=await mostrarMenu();
        opt=='0'??await pausa()
    }
    
        
    // pausa();
}

main();