var Kittens = function(name, fileLocation){
  this.name = name;
  this.fileLocation = $.get(fileLocation);
  this.count = 0
}

var one = new Kittens('one', 'kittens/1.jpg');
var two = new Kittens('two', 'kittens/2.jpg');
var three = new Kittens('three', 'kittens/3.jpg');
var four = new Kittens('four', 'kittens/4.jpg');
var five = new Kittens('five', 'kittens/5.jpg');
var six = new Kittens('six', 'kittens/6.jpg');
var seven = new Kittens('seven', 'kittens/7.jpg');
var eight = new Kittens('eight', 'kittens/8.jpg');
var nine = new Kittens('nine', 'kittens/9.jpg');
var ten = new Kittens('ten', 'kittens/10.jpg');
var eleven = new Kittens('eleven', 'kittens/11.jpg');
var twelve = new Kittens('twelve', 'kittens/12.jpg');
var thirteen = new Kittens('thirteen', 'kittens/13.jpg');
var fourteen = new Kittens('fourteen', 'kittens/14.jpg');

var kittenCorral = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen];
var number1;
var kitten1;
var chooseOne = function(){
    number1 = Math.floor(Math.random() * 14) + 1;
    kitten1 = kittenCorral[number1 - 1];
}
chooseOne();
console.log(number1);
console.log(kitten1.name);
console.log(kitten1.fileLocation);

var number2;
var kitten2;
var chooseTwo = function(){
    number2 = Math.floor(Math.random() * 14) + 1;
    if (number2 === number1){
        newNumber2 = Math.floor(Math.random() * 14) + 1;
        kitten2 = kittenCorral[newNumber2 - 1];
    }
    else {
       kitten2 = kittenCorral[number2 - 1];
    }
}
chooseTwo();
console.log(number2);
console.log(kitten2.name);
console.log(kitten2.fileLocation);
;
// var img1 = $('<img />',
//              { id: 'img1',
//                src: $.get('kittens/1.jpg'),
//              }).appendTo('#img1');
