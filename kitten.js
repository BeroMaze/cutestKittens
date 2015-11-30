//                               //generates the first random number for image 1
// var number1 = Math.floor(Math.random() * 14) + 1 + '.jpg';

//                               //generates the second random number for image 2
// var number2 = function(){
//     var number = Math.floor(Math.random() * 14) + 1 + '.jpg';
//                               //test to see if image2 is the same as image 1
//     if (number === number1){
//           var newNumber = Math.floor(Math.random() * 14) + 1 + '.jpg';
//             return newNumber;
//     }
//     else{
//           return number;
//     }
// }
//loads the first image into the first slot
var img1 = $('<img />',
             { id: 'img1',
               src: 'kittens/' + this.image,
             }).appendTo('#img1');

// loads the second image into the second slot
var img2 = $('<img />',
             { id: 'img2',
               src: "'" + kitten2.fileLocation + "'",
             }).appendTo('#img2');


// document.getElementById('img1').disable = false;
var click1 = document.getElementById('img1').addEventListener('click', function () {
  var count1 = 0;
      count1++;
  // console.log(count1);
  // document.getElementById('img1').disabled = true;
});

// document.getElementById('img2').disable = false;
document.getElementById('img2').addEventListener('click', function () {
  var count2 = 0;
      count2++;
      // console.log(count2);
      $("#img1").off('click');
  // document.getElementById('img2').disabled = true;
});




