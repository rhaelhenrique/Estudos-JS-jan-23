import "./styles.css";
import axios from "axios";

//Exemplo01
//fetch("https://api.github.com/users/rhaelhenrique").then((response) => {
//  response.json().then((data) => console.log(data));
//});

//Exemplo02
//axios.get("https://api.github.com/users/rhaelhenrique").then((res) => {
//  console.log(res.data.login, res.data.id);
//  let nome = res.data.login;
//  let id = res.data.id;
//  console.log("Nome: "+nome+" ID: "+id)
//}).catch(error => console.log(error.message))

//Exemplo03
//const promessa = new Promise(function (resolve, reject) {
//  return resolve("ok");
//  //return reject('erro')
//});
//
//async function start() {
//  try {
//    const result = await promessa;
//    console.log(result);
//  } catch (error) {
//    console.log(error);
//  } finally {
//    console.log("rodar sempre");
//  }
//}
//
//start();

//Exemplo04
//fetch("https://api.github.com/users/rhaelhenrique")
//  .then( response => response.json())
//  .then( data => fetch(data.repos_url))
//  .then( res => res.json())
//  .then( d => console.log(d))
//  .catch( err => console.log(err))
//

//Exemplo05
//async function start() {
//  const user = await fetch(
//    "https://api.github.com/users/rhaelhenrique"
//  ).then((response) => response.json());
//  const repos = await fetch(user.repos_url).then((r) => r.json());
//  console.log(repos);
//}
//start().catch((e) => console.log(e));

//Exemplo06
async function start() {
  const url = "https://api.github.com/users/rhaelhenrique";
  const user = await fetch(url).then((response) => response.json());
  const repos = await fetch(user.repos_url).then((r) => r.json());
  console.log(repos);
}
start().catch((e) => console.log(e));
