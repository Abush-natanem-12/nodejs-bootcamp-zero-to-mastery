const http = require("http");
const PORT = 8000;

const friends = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "Nicola Tesla",
  },
  {
    id: 2,
    name: "Elon Musk",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
  },
];

const server = http.createServer(function (request, response) {
  const items = request.url.split("/");
  if (request.method === "POST" && items[1] === "friends") {
    // friends.push()
  }

  if (request.url === "/friends") {
    response.writeHead(200, {
      "Content-type": "application/json",
    });
    response.end(JSON.stringify(friends));
  } else if (request.url === "/messages") {
    response.writeHead(200, {
      "Content-type": "text/html",
    });

    response.end(`<h1>How are you All of My friends</h1>`);
  } else {
    response.writeHead(404, {
      "Content-type": "text/plain",
    });

    response.end('don\'t use any thing from this');
  }
});

server.listen(PORT, () => console.log("We are listening to your request"));
