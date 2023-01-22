console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const wifeArrivesWithTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  const getCandy =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('candy'), 3000);
  });
  
   const getCoke =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await wifeArrivesWithTicket;
  console.log(`Wife: I got the ${ticket}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: I am hungry`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: I got some ${popcorn}`);
	console.log(`Husband: we should go in now`);
  console.log(`Wife: I dont like popcorn without butter!`);
  
  let butter = await addButter;
  console.log(`Here's your ${popcorn} & ${butter}`);
  console.log(`Now let's go in.`);

  let [popcorns, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
  console.log(`Got ${popcorns}, ${candy} & ${coke}`)

  return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person5 shows ticket');
