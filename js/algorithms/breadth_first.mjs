function breadthFirst(target, graph) {
  const queue = ["you"];
  const searched = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      if (!searched.includes(node)) {
        if (node === target) {
          return true;
        } else {
          graph[node].forEach((newNode) => {
            queue.push(newNode);
          });
          searched.push(node);
        }
      }
    }
  }
  return false;
}

const nameGraph = {};
nameGraph["you"] = ["alice", "bob", "claire"];
nameGraph["bob"] = ["anuj", "peggy"];
nameGraph["alice"] = ["peggy"];
nameGraph["claire"] = ["thom", "jonny"];
nameGraph["anuj"] = [];
nameGraph["peggy"] = [];
nameGraph["thom"] = [];
nameGraph["jonny"] = [];

console.log(breadthFirst("claires", nameGraph));

console.log(nameGraph);
