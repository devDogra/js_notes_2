// const btn = document.querySelector("button");

// // Returns a promise that attaches an event listener to btn, and then returns via resolve the event object when that listener fires
// function addE(btn, eventname) {
//   return new Promise((resolve, reject) => {
//     btn.addEventListener(eventname, (e) => {
//       resolve(e);
//     });
//     // or just:
//     // btn.addEventListener(eventname, resolve);
//     // but requires knowing that e will be passed to resolve
//   });
// }

// addE(btn, "click").then((e) => {
//   console.log(`${e.target} was clicked`);
// });

// promise that returns with success after 'delay'

// function sto(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(res, delay);
//   });
// }

// sto(200)
//   .then(() => {
//     console.log("200ms ");
//     return sto(500);
//   })
//   .then(() => {
//     console.log("700ms");
//     return sto(1000);
//   })
//   .then(() => {
//     console.log("1700ms");
//   });

// function sto2(delay) {
//   let msg = "U WAITED";
//   return new Promise((res, rej) => {
//     setTimeout(() => res(msg), delay);
//   });
// }

// // sto2(200, "u waited")
// //   .then((msg) => {
// //     console.log(msg);
// //     return sto2(200, "u waited again nygga");
// //   })
// //   .then((msg) => {
// //     console.log(msg);
// //   });

// async function dos() {
//   // resolve
//   const msg1 = await sto2(200);
//   console.log(msg1);
// }

// // res and deal with rej
// async function dos2() {
//   // catch runs if any rejects(err) happen or if any errs in general happen. err is the x of reject(x), or just the error normal
//   try {
//     const msg1 = await sto2(200);
//     console.log(msg1);
//   } catch (err) {
//     console.log("FOUND AN ERROR");
//   }
// }

// function getValWithDelay(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(value), delay);
//   });
// }

// function getValWithDelayError(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("ERROR"), delay);
//   });
// }

// async function runstuff() {
//   try {
//     const val1 = await getValWithDelay(100, 1000);
//     console.log(val1);
//     const val2 = await getValWithDelay(9, 500);
//     console.log(val2);

//     const val3 = await getValWithDelayError(24, 2000);
//   } catch (err) {
//     console.log(err);
//     console.log("OHHH NOOOO");
//   } finally {
//     console.log("FINALLY");
//   }
// }

// runstuff();
