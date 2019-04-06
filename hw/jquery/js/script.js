//Executes when pages loads
var step = 0;
var titles = [
'Fried the Onion!',//0 titles[0]
'Stir the Pork!',//1 titles[1]
'Seasoning!',//2 titles[2]
'Add Eggs',//3 titles[3]
'Wait Wait Wait!'//4 titles[4]

];

$(function(){
$("#stepinfo,section,footer, .prev").hide();
//change class
$('body').css('background-color', '#FFFEBB');



});


$('.start').on('click',function(){
//do stuff when the button is clicked
  $('.intro').hide();
  $('footer, #stepinfo').show();
  step = 1;
  $('#step'+step).show();
  //set title for current step
  $('#stepinfo').text('Step '+step+': '+titles[step-1]);
});

$('.next').on('click',function(){
  $('#step'+step).hide();
  step++;
if (step == 2) {
$('.prev').show();
}
if (step == 5) {
$('.next').hide();
$('#final').html('We are done! Hope you enjoy it! <strong> Start Again? <strong>');
}

if (step < 6) {

  $('#step'+step).show();

  $('#stepinfo').text('Step '+step+':  '+titles[step-1]);
}
else {
  step--;
  $('#step'+step).show();
  $('.next').hide();
}

});
//previous
$('.prev').on('click',function(){
  $('#step'+step).hide();
  step--;
if (step == 1) {
$('.prev').hide();
} else {
  $('.next').show()
}
if (step == 5) {
$('.next').hide();
}

if (step >= 1) {

  $('#step'+step).show();

  $('#stepinfo').text('Step '+step+':  '+titles[step-1]);
}
else {
  step--;
  $('#step'+step).show();
  $('.next').hide();
}

});
