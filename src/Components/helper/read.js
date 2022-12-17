

export async function fread (filename) {
  let temp = ""
  await fetch(filename)
  .then(response => response.text())
  .then(text => {
    console.log(text)
      temp = text;
  });
  return temp;
}

export async function readDir () {
  let temp = {}
  await fetch("metadata.json")
  .then(response => response.json())
  .then(text => {
      temp = text;
  })
  .catch(err => console.log(err));
  return temp;
}

export async function readByID (id) {
  let temp = {}
  await fetch("/metadata.json")
  .then(response => response.json())
  .then(text => {
      temp = text;
  });
  let html = temp.filter(element => element.id == id)[0]
  if (!html) {
    return "undefined";
  }
  else {
    html = html.html;
  }
  let path = `/htmls/${html}`
  console.log(path)
  return await fread(`${path}`);
}

