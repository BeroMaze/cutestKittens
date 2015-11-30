                              //generates the first random number for image 1
var number1 = Math.floor(Math.random() * 14) + 1 + '.jpg';

                              //generates the second random number for image 2
var number2 = function(){
    var number = Math.floor(Math.random() * 14) + 1 + '.jpg';
                              //test to see if image2 is the same as image 1
    if (number === number1){
          var newNumber = Math.floor(Math.random() * 14) + 1 + '.jpg';
            return newNumber;
    }
    else{
          return number;
    }
}
//loads the first image into the first slot
var img1 = $('<img />',
             { id: 'img1',
               src: 'kittens' + "/" + number1,
             }).appendTo('#img1');

// loads the second image into the second slot
var img2 = $('<img />',
             { id: 'img2',
               src: 'kittens' + "/" + number2(),
             }).appendTo('#img2');




