chooseOne(); // runs the first kitten image choose
chooseTwo(); // runs the second kitten image choose

//loads the first image into the first slot
var img1 = $('<img />',
             { id: 'img1',
               src: 'kittens/' + kitten1.image,
             }).appendTo('#img1');

// loads the second image into the second slot
var img2 = $('<img />',
             { id: 'img2',
               src: 'kittens/' + kitten2.image,
             }).appendTo('#img2');


// document.getElementById('img1').disable = false;
var click1 = document.getElementById('img1').addEventListener('click', function () {
      kitten1.count++;
      $kittenLeft = $('#kitten1');
      $kittenLeft.css('border-color', 'green');
      $kittenLeft.css('border-width', '10px');
      $kittenLeft.css('background-color', 'green');
      $kittenRight = $('#kitten2');
      $kittenRight.css('border-color', 'red');
      $kittenRight.css('border-width', '10px');
      $kittenRight.css('background-color', 'red');
      chart();
      console.log(kitten1.count);
      console.log(kitten1);
      console.log(number1);
      console.log(kittenCorral);
  // document.getElementById('img1').disabled = true;
});

// document.getElementById('img2').disable = false;
document.getElementById('img2').addEventListener('click', function () {
      kitten2.count++;
      $kittenRight = $('#kitten2');
      $kittenRight.css('border-color', 'green');
      $kittenRight.css('border-width', '10px');
      $kittenRight.css('background-color', 'green');
      $kittenLeft = $('#kitten1');
      $kittenLeft.css('border-color', 'red');
      $kittenLeft.css('border-width', '10px');
      $kittenLeft.css('background-color', 'red');
      chart();
      console.log(kitten2.count);
      console.log(kitten2);
      console.log(number2);
      console.log(kittenCorral);
});

var chart = function(){
var ctx = document.getElementById("myChart").getContext("2d");
var data = {
    labels: ["kitten1", "kitten2", "kitten3", "kitten4", "kitten5", "kitten6", 'kitten7', 'kitten8', 'kitten9', 'kitten10', 'kitten11', 'kitten12', 'kitten13', 'kitten14'],
    datasets: [
        {
            label: "kittens",
            fillColor: "rgba(80, 51, 99, 0.8)",
            strokeColor: "rgba(0,0,0,0.8)",
            highlightFill: "rgba(0, 255, 225, 0.9)",
            highlightStroke: "rgba(0,0,0,1)",
            data: kittenCorral.map(function(i){
              return i.count;
            }),
        },
    ]
};
var myBarChart = new Chart(ctx).Bar(data);
}


