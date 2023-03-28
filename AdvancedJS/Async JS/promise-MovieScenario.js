console.log("person1 shows ticket");
console.log("person2 shows ticket");

const wifeArrivesWithTicket = new Promise((resolve, reject) => {
  setTimeout(() => resolve(`ticket`), 3000);
});

const getPopcorn = wifeArrivesWithTicket.then((ticket) => {
  console.log(`Wife: I got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: I am hungry`);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`popcorn`), 3000);
  });
});

const addButter = getPopcorn.then((popcorn) => {
  console.log(`Husband: I got some ${popcorn}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: I dont like popcorn without butter!`);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${popcorn} & butter`), 3000);
  });
});

addButter.then((result) => {
  console.log(`Here's your ${result}`);
  console.log(`Now let's go in.`);
  console.log("person4 shows ticket");
});

console.log("person4 shows ticket");
console.log("person5 shows ticket");
