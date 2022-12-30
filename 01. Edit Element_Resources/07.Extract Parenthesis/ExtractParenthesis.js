function extract(content) {
  let text = document.getElementById(content).textContent;
  let pattern = /\((?<element>[^)]+)\)/g;
  let matches = text.matchAll(pattern);
  let result = [];

  for (let i of matches) {
    result.push(i.groups.element);
  }
  return result.join('; ');
  //console.log(result);
}
