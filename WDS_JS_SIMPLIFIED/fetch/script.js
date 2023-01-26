// fetch(url)
//   .then((response) => {
//     let p = response.json();
//     return p;
//   })
//   .then(data => {
//     console.log(data);
// });

// fetch the url asyncly, then when it (the promise (promised response)) resolves, take the response and convert it to json asyncly,
// then when that (the promise (promised json data)) resolves, log the data we get from it out
// .json runs asyncly cuz its slow

const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((entry) => {
//       console.log(entry.name);
//     });
//   });

// async more useful when each async task depends on the previous one
// but promises more useful for doing independent
// async tasks in parellel
// async function getNames() {
//   const response = await fetch(url);
//   const data = await response.json();
//   data.forEach((entry) => console.log(entry.name));
// }
// getNames();

// if url tries to fetch smth that doesnt exist,
// we get a 404 error but the code still runs just nothin gets printed cuz no users were fetched
// why does the code still run? cuz 404 is an expected error, meaning it just wasnt able to find the resrc.
// actual errors only thrown when an actual error takes place (internal err like losing internet cnctn);

// url for a user that doesnt exist
const url2 = "https://jsonplaceholder.typicode.com/users/20";

async function getUsr() {
  try {
    const response = await fetch(url2);
    // no expected errs/resp successful
    if (response.ok) {
      const usr = await response.json();
      console.log(usr);
    } else {
      console.log("FAILURE");
    }
  } catch (e) {
    // catch to deal with UNexpected errs
  }
}
// expected errs: kinda stuff thats not our fault?  cuz not our fault if the rsrc isnt available on the server rn its their prblm
// but unexp errs: we're expected to HAVE a working intnt cncntn

// SO 404, 500 or another expected error, it wil STILL follow ur success logic (in try)
// (or if no try, wont throw UNCAUGHT ERROR, will justy continue on);

/* -------------------------------------------------------------------------- */
/*          // posting data to the server (post a social media post)          */
/* -------------------------------------------------------------------------- */
const urlpost = "https://jsonplaceholder.typicode.com/posts";

async function postPost() {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "new post by dev",
      content: "my name is dev and im a nygga",
    }),
  };

  const response = await fetch(urlpost, fetchOptions);
  const postedPost = await response.json();
  console.log("you posted the post: ");
  console.log(postedPost);
}

postPost();
