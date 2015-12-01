chooseOne(); // runs the first kitten image choose
chooseTwo(); // runs the second kitten image choose
var localKittenInfo;
var localData = localStorage.getItem('localKittenCorral');
var kittenCorralLocal = JSON.parse(localData);
console.log(kittenCorralLocal);

var click1 = document.getElementById('img1').addEventListener('click', function () {
      kitten1.count++;
      localKittenInfo = JSON.stringify(kittenCorral);
      localStorage.setItem('localKittenCorral', localKittenInfo);
      $kittenLeft = $('#kitten1');
      $kittenLeft.css('border-color', 'green');
      $kittenLeft.css('border-width', '10px');
      $kittenLeft.css('background-color', 'green');
      $kittenRight = $('#kitten2');
      $kittenRight.css('border-color', 'red');
      $kittenRight.css('border-width', '10px');
      $kittenRight.css('background-color', 'red');
      $('#theChart').html('<canvas id="myChart" width="800" height="400"></canvas>'); // creates chart in html
      chart(); // runs chart infromation
      $('#next').html('<button id = "button">Next</button>');
      window.scrollTo(0, 400);
      // console.log(kitten1.count);
      // console.log(kitten1);
      // console.log(number1);
      // console.log(kittenCorral);
});
document.getElementById('img2').addEventListener('click', function () {
      kitten2.count++;
      localKittenInfo = JSON.stringify(kittenCorral);
      localStorage.setItem('localKittenCorral', localKittenInfo);
      $kittenRight = $('#kitten2');
      $kittenRight.css('border-color', 'green');
      $kittenRight.css('border-width', '10px');
      $kittenRight.css('background-color', 'green');
      $kittenLeft = $('#kitten1');
      $kittenLeft.css('border-color', 'red');
      $kittenLeft.css('border-width', '10px');
      $kittenLeft.css('background-color', 'red');
      $('#theChart').html('<canvas id="myChart" width="800" height="400"></canvas>'); // creates chart in html
      chart(); // runs chart information
      window.scrollTo(0, 400);
      $('#next').html('<button id = "button">Next</button>');

      // console.log(kitten2.count);
      // console.log(kitten2);
      // console.log(number2);
      // console.log(kittenCorral);
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

document.getElementById('next').addEventListener('click', function () {
      $('#img1').empty();
      $('#img2').empty();
      $('#button').remove();
      $kittenLeft = $('#kitten1');
      $kittenLeft.css('border-color', 'white');
      $kittenLeft.css('border-width', '3px');
      $kittenLeft.css('background-color', 'black');
      $kittenRight = $('#kitten2');
      $kittenRight.css('border-color', 'white');
      $kittenRight.css('border-width', '3px');
      $kittenRight.css('background-color', 'black');
      chooseOne(); // runs the first kitten image choose
      chooseTwo(); // runs the second kitten image choose
      window.scrollTo(0, 0);
  });


