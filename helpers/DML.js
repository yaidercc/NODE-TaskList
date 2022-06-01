const fs = require("fs")

// file path
const path='./database/data.json';
/**
 * Function to save info in database
 * @param {*} data 
 */
const  saveinfo=(data)=>{
    fs.writeFileSync(path,JSON.stringify(data));
}

const readDB=()=>{
    if(!fs.existsSync(path)){
        return null;
    }
    const info = fs.readFileSync(path,{encoding:'utf-8'});
    return JSON.parse(info);
}

module.exports={
    saveinfo,
    readDB
}