// functions

function myFunction() {
  this.name = "myFunction Eduardo";
}

console.log(new myFunction()); // objeto com a propriedade name apenas dentro do contexto da função

// arrow functions

const myArrowFunction = () => {
  this.name = "myArrow Eduardo";
};

myArrowFunction();

console.log(this); // arrow functions não possuem o this portanto a propriedade name é atribuida ao contexto de onde a arrow function esta sendo chamada
