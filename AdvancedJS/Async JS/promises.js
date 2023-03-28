let userLastActiveTime = new Date();
console.log(`User's Login Time - ${userLastActiveTime}`);
let posts = [
  { title: "Post1", body: "Post1 body", createdAt: new Date() },
  { title: "Post2", body: "Post2 body", createdAt: new Date() },
];

function getPosts() {
  setTimeout(function () {
    //let output = "";

    posts.forEach((post, index) => {
      //output += `<li>${post.title}</li>`;
      let timeDifference = Math.floor(
        (new Date() - new Date(post.createdAt)) / 1000
      );
      console.log(`${post.title} created ${timeDifference} seconds ago`);
    });
    //document.body.innerHTML = output
  }, 1000);
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(`${deletedPost.title} deleted!`);
      } else {
        reject("Array is empty now");
      }
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

deletePost()
  .then((done) => console.log(done))
  .catch((err) => console.log(err));
deletePost()
  .then((done) => console.log(done))
  .catch((err) => console.log(err));
deletePost()
  .then((done) => console.log(done))
  .catch((err) => console.log(err));

createPost({
  title: "Post3",
  body: "Post3 body",
  createdAt: new Date(),
}).then(() => {
  getPosts();
});

createPost({ title: "Post4", body: "Post4 body", createdAt: new Date() }).then(
  () => {
    getPosts();
    deletePost()
      .then((done) => console.log(done))
      .catch((err) => {
        console.log(err);
      });
  }
);

//----------[promise.all] Activity 1 starts here-------------
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye')
})

Promise.all([promise1,promise2,promise3]).then((values) => {
  console.log(values)
});

//----------[promise.all] Activity 1 ends here-------------


//----------[promise.all] Activity 2 starts here-------------
let updateLastUserActivityTime = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      userLastActiveTime = new Date();
      resolve();
    }, 1000);
  });
};

Promise.all([
  createPost({
    title: "Post5",
    body: "Post5 body",
    createdAt: new Date(),
  }),
  updateLastUserActivityTime(),
]).then(() => {
  getPosts();
  console.log(`User's last active time - ${userLastActiveTime}`);
});
//----------[promise.all] Activity 2 ends here-------------

//----------[promise.all] Activity 3 starts here-------------
Promise.all([
  createPost({
    title: "Post5",
    body: "Post5 body",
    createdAt: new Date(),
  }),
  updateLastUserActivityTime(),
]).then(() => {
  deletePost().then((done) => {
    console.log(done);
    getPosts();
  });
});
//----------[promise.all] Activity 3 ends here-------------