import { resolve } from "uri-js";
import { request } from "https";

const minhaPromise = () => new Promise((resolve, rejects)=> {
    setTimeout(() => {resolve('OK')}, 2000);
});

//JavaScript
//minhaPromise().then(response => {
//    console.log(response);
//})
//.catch(err => {

//});
//*/

//ES6, ES7 e ES8
//yarn add @babel/plugin-transform-async-to-generator -D
//altera o package.json
//yarn add @babel/polyfill -D
//altera o webpack.config.js

/*
//modo 1
async function executaPromise(){
    const response = await minhaPromise();

    console.log(response);
}

executaPromise();
*/

//modo 2
/*
async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());    
}

executaPromise();
*/

//com arrow function
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());    
};

executaPromise();