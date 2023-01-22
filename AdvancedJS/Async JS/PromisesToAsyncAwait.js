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

async function deletePost() {
  try {
    const deletionPromise = await new Promise((resolve, reject) => {
      setTimeout(function () {
        if (posts.length > 0) {
          const deletedPost = posts.pop();
          resolve(`${deletedPost.title} deleted!`);
        } else {
          reject("Array is empty now");
        }
      }, 1000);
    });
    console.log(deletionPromise);
  } catch (error) {
    console.log(error);
  }
}

async function createPost(post) {
  try {
    post.createdAt = new Date();
    const creationPromise = await new Promise((resolve, reject) => {
      setTimeout(function () {
        posts.push(post);
        resolve(`${post.title} created successfully`);
      }, 2000);
    });
    console.log(creationPromise);
  } catch (error) {
    console.log(error);
  }
}

deletePost();
deletePost();
deletePost();

createPost({
  title: "Post3",
  body: "Post3 body",
});

createPost({
  title: "Post4",
  body: "Post4 body",
});