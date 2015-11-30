//kitten object
var Kittens = function(name, fileName, count){
  this.name = name;
  this.image = fileName;
  this.count = count;
}
var number1;//the number for the first number generated
var kitten1;// the first kitten chosen
var number2;// the number for the second number generated
var kitten2;// the second kitten chosen

// each kitten object for each picture
var one = new Kittens('one', '1.jpg', 2);
var two = new Kittens('two', '2.jpg', 33);
var three = new Kittens('three', '3.jpg', 43);
var four = new Kittens('four', '4.jpg', 4);
var five = new Kittens('five', '5.jpg', 31);
var six = new Kittens('six', '6.jpg', 55);
var seven = new Kittens('seven', '7.jpg', 66);
var eight = new Kittens('eight', '8.jpg', 12);
var nine = new Kittens('nine', '9.jpg', 19);
var ten = new Kittens('ten', '10.jpg', 23);
var eleven = new Kittens('eleven', '11.jpg', 34);
var twelve = new Kittens('twelve', '12.jpg', 43);
var thirteen = new Kittens('thirteen', '13.jpg', 54);
var fourteen = new Kittens('fourteen', '14.jpg', 22);

// array of all the kitten images
var kittenCorral = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen];

// number generator for the first kitten image
var chooseOne = function(){
    number1 = Math.floor(Math.random() * 14) + 1; // random number generated
    kitten1 = kittenCorral[number1 - 1];          // chooses the kitten object
}

// number generator for the second kitten image
var chooseTwo = function(){
    number2 = Math.floor(Math.random() * 14) + 1; // random number generated
    if (number2 === number1){                     // checks to see if image 1 and 2 are the same
        newNumber2 = Math.floor(Math.random() * 14) + 1; // generates new number is needed
        kitten2 = kittenCorral[newNumber2 - 1];          //  chooses the kitten object
    }
    else {
       kitten2 = kittenCorral[number2 - 1]; // chooses the kitten object
    }
}



