const http = require("http");

const PORT = 8000;

const friends = [
  {
    id: 0,
    name: "Nicola Tesla",
  },
  {
    id: 1,
    name: "Alber Einsten",
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
  },
];

const server = http.createServer(function (request, response) {
  const path = request.url.split("/");
  console.log(path)

  if (path.length === 3) {
    if (path[1] === "friends") {
      if (!isNaN(path[2]) && friends.length <= Number(path[2])) {
        response.writeHeader(200,
            {"Content-Type": "application/json"})
        response.end(JSON.stringify(friends[path[2]]));
      }
    }
  }
})

server.listen(PORT, () => console.log(`listening to the port ${PORT}`))