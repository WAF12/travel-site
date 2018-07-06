function Person(fullName, favColor){
    this.name = fullName,
    this.favColor = favColor,
    this.greet = () => 
    console.log(`Hi my name is ${this.name} amd my favourite colour is ${this.favColor}`);
}

//Alternative using ES6 classes
/*
class Person{
   constructor (fullName, favColor){
    this.name = fullName;
    this.favColor = favColor;
    }

    greet() {
        console.log(`Hi my name is ${this.name} amd my favourite colour is ${this.favColor}`)};
}
*/