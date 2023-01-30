// AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] = "someTokenValue";

// GET REQUEST
function getTodos() {
  console.log("GET Request");
  // Approach-1 for making a get request
  /*
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
    params: {
      _limit: 5
    }
  })
    .then()
    .catch();
  */

  // Approach-2 for making a get request
  // axios.get('https://jsonplaceholder.typicode.com/todos', {params: {_limit: 5}})
  // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  axios("https://jsonplaceholder.typicode.com/todos?_limit=5", {
    timeout: 5000
  }) //By default get method will be called
    .then((res) => showOutput(res))
    .catch((error) => console.error(error));
}

// POST REQUEST
function addTodo() {
  console.log("POST Request");
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New work",
      completed: "false",
    })
    .then((res) => showOutput(res))
    .catch((error) => console.error(error));
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log("PUT/PATCH Request");
  // PUT - It will replace the entire data with what we specify
  // PATCH - It will replace only the specified section in the whole data.
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "New Updated work",
      completed: "true",
    })
    .then((res) => showOutput(res))
    .catch((error) => console.error(error));
}

// DELETE REQUEST
function removeTodo() {
  console.log("DELETE Request");
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => showOutput(res))
    .catch((error) => console.error(error));
}

// SIMULTANEOUS DATA
function getData() {
  console.log("Simultaneous Request");
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    ])
    .then(
      axios.spread((todos, posts) => {
        console.log(todos);
        console.log(posts);
        showOutput(posts);
      })
    )
    .catch((error) => console.error(error));
}

// CUSTOM HEADERS
function customHeaders() {
  console.log("Custom Headers");
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "someToken",
    },
  };
  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New work",
        completed: "false",
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((error) => console.error(error));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log("Transform Response");
  axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      'title': 'Transformed Response'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data
    })
  })
    .then(res => showOutput(res))
    .catch();
}

// ERROR HANDLING
function errorHandling() {
  console.log("Error Handling");
  axios("https://jsonplaceholder.typicode.com/todoss", {
    validateStatus: function (status) {
      return status < 500;
    },
  })
    .then((res) => showOutput(res))
    .catch((error) => {
      if (error.response) {
        // server responded with a status other than 200
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        // Request was made but no response
        console.log(error.request);
      } else {
        console.log(error.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  console.log("Cancel Token");
  const source = axios.cancelToken.source();
  axios("https://jsonplaceholder.typicode.com/todoss", {
    cancelToken: source.token,
  })
    .then((res) => showOutput(res))
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log("Request cancelled", error.message);
      }
    });

  /* 
    if(true) {
      source.cancel('Request cancelled!');
    }
    */
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCES
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
//axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);