class Person {
  constructor() {
    this.ligações = ["0", "0", "0", "0", "0", "0"];
  }
  storeNames = {
    Ana: 0,
    Bruno: 1,
    Carlos: 2,
    Debora: 3,
    Eduardo: 4,
    Flavia: 5,
  };
  execute(name) {
    this.ligações[this.storeNames[name]] = "1";
  }
}

function buildMatriz(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6) {
  const array = [
    pessoa1.ligações,
    pessoa2.ligações,
    pessoa3.ligações,
    pessoa4.ligações,
    pessoa5.ligações,
    pessoa6.ligações,
  ];
  return array;
}

function showInConsole(matriz) {
  console.table(matriz);
}

const ana = new Person();
const bruno = new Person();
const carlos = new Person();
const debora = new Person();
const eduardo = new Person();
const flavia = new Person();

ana.execute("Ana");
ana.execute("Bruno");
ana.execute("Carlos");

bruno.execute("Bruno");
bruno.execute("Debora");
bruno.execute("Eduardo");

carlos.execute("Carlos");
carlos.execute("Debora");
carlos.execute("Eduardo");

debora.execute("Debora");
debora.execute("Flavia");

eduardo.execute("Eduardo");
eduardo.execute("Flavia");

flavia.execute("Flavia");

console.log("Ana", ana.ligações);
console.log("Bruno", bruno.ligações);
console.log("Carlos", carlos.ligações);
console.log("Debora", debora.ligações);
console.log("Eduardo", eduardo.ligações);
console.log("Flavia", flavia.ligações);

const matriz = buildMatriz(ana, bruno, carlos, debora, eduardo, flavia);

showInConsole(matriz);


function antiSimetrica(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && matrix[i][j] === 1 && matrix[j][i] === 1) {
        return false;
      }
    }
  }
  return true;
}


if(antiSimetrica(matriz)){
  console.log("Matriz é Anti-simetrica!")
}
else{
console.log("Matriz não é Anti-simetrica!")
}

function reflexiva(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    if(matrix[i][i] != 1)
    return false;
  }
  return true;
}

if(reflexiva(matriz)){
  console.log("Matriz é Reflexiva!")
}
else{
console.log("Matriz não é Reflexiva!")
}

function simetrica(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
}

if(simetrica(matriz)){
  console.log("Matriz é Simetrica!")
}
else{
console.log("Matriz não é Simetrica!")
}


function assimetrica(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j && matrix[i][j] !== 0) {
        return false; // a diagonal não é zero
      }
      if (matrix[i][j] === 1 && matrix[j][i] === 1) {
        return false;
      }
    }
  }
  return true; // a relação é assimétrica
}

  if(assimetrica(matriz)){
    console.log("Matriz é Assimetrica!")
  }
else{
  console.log("Matriz não é Assimetrica!")
}




