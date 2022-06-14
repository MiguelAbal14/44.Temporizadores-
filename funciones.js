import {tiempo} from "./variables.js";



//Algo se va a hacer en cuestion de milisegundos
setTimeout(()=>{
console.log("ganaste algo!");
}, 4000);


setInterval(()=>{
console.log(tiempo.toLocaleTimeString());
}),10000;