// const promessa = new Promise(function (resolve, reject) {
//   let condicao = false
//   if (condicao) {
//     resolve('Estou pronto!')
//   } else {
//     reject(Error('Um erro ocorreu.'))
//   }
// })

// console.log(promessa) // Promise {<rejected>: Error:...}

//then
// const promessa = new Promise(function (resolve, reject) {
//   let condicao = true

//   if (condicao) {
//     resolve({ marca: 'honda', cor: 'red' })
//   } else {
//     reject(Error('Um erro ocorreu.'))
//   }
// })

// promessa.then(function (resolucao) {
//   console.log(resolucao) // 'Estou pronto!'
// })

// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele.

// const promessa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolvida')
//   }, 1000)
// })

// promessa.then(resolucao => {
//   console.log(resolucao) // 'Resolvida' após 1s
// })

// O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.

// const promessa = new Promise((resolve, reject) => {
//   resolve('Etapa 1')
// })

// promessa
//   .then(resolucao => {
//     console.log(resolucao) // 'Etapa 1';
//     return 'Etapa 2'
//   })
//   .then(resolucao => {
//     console.log(resolucao) // 'Etapa 2';
//     return 'Etapa 3'
//   })
//   .then(r => r + 4)
//   .then(r => {
//     console.log(r) // Etapa 34
//   })

//   // CATCH

//   const promessa = new Promise((resolve, reject) => {
//     let condicao = false;
//     if(condicao) {
//       resolve('Estou pronto!');
//     } else {
//       reject(Error('Um erro ocorreu.'));
//     }
//   });

//   promessa.then(resolucao => {
//     console.log(resolucao);
//   }).catch(reject => {
//     console.log(reject);
//   });

// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao) {
//     resolve('Estou pronto!');
//   } else {
//     reject(Error('Um erro ocorreu.'));
//   }
// });

// promessa.then(resolucao => {
//   console.log(resolucao);
// }, reject => {
//   console.log(reject);
// });
