//kitten object
var Kittens = function(name, fileName){
  this.name = name;
  this.image = fileName;
  this.count = 0;
}
var number1;//the number for the first number generated
var kitten1;// the first kitten chosen
var number2;// the number for the second number generated
var kitten2;// the second kitten chosen

// each kitten object for each picture
var one = new Kittens('one', '1.jpg');
var two = new Kittens('two', '2.jpg');
var three = new Kittens('three', '3.jpg');
var four = new Kittens('four', '4.jpg');
var five = new Kittens('five', '5.jpg');
var six = new Kittens('six', '6.jpg');
var seven = new Kittens('seven', '7.jpg');
var eight = new Kittens('eight', '8.jpg');
var nine = new Kittens('nine', '9.jpg');
var ten = new Kittens('ten', '10.jpg');
var eleven = new Kittens('eleven', '11.jpg');
var twelve = new Kittens('twelve', '12.jpg');
var thirteen = new Kittens('thirteen', '13.jpg');
var fourteen = new Kittens('fourteen', '14.jpg');

// array of all the kitten images
var kittenCorral = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen];

// number generator for the first kitten image
var chooseOne = function(){
    number1 = Math.floor(Math.random() * 14) + 1; // random number generated
    kitten1 = kittenCorral[number1 - 1];
    var img1 = $('<img />',
             { id: 'img1',
               src: 'kittens/' + kitten1.image,
             }).appendTo('#img1').height('350px');
          // chooses the kitten object
}

// number generator for the second kitten image
var chooseTwo = function(){
    number2 = Math.floor(Math.random() * 14) + 1; // random number generated
    if (number2 === number1){                     // checks to see if image 1 and 2 are the same
        newNumber2 = Math.floor(Math.random() * 14) + 1; // generates new number is needed
        kitten2 = kittenCorral[newNumber2 - 1];
        var img2 = $('<img />',
             { id: 'img2',
               src: 'kittens/' + kitten2.image,
             }).appendTo('#img2').height('350px');        //  chooses the kitten object
    }
    else {
       kitten2 = kittenCorral[number2 - 1];
       var img2 = $('<img />',
             { id: 'img2',
               src: 'kittens/' + kitten2.image,
             }).appendTo('#img2').height('350px'); // chooses the kitten object
    }
}



