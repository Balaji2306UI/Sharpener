let posts = [
  { title: "Post1", body: "Post1 body", createdAt: "2023-01-8 8:10:23" },
  { title: "Post2", body: "Post2 body", createdAt: "2023-01-9 10:10:23" },
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

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

//createPost({title: "Post3", body: "Post3 body", createdAt: "2023-01-10 10:10:33"}, getPosts)

function create4thPost(post, callback) {
  callback(post, getPosts);
}

create4thPost(
  { title: "Post4", body: "Post4 body", createdAt: "2023-01-10 10:10:44" },
  createPost
);
