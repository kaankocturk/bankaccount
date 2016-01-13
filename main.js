$(document).ready(init);
transactionCount=0;
var balance = 0;
function init(e){
    $('.button1').on('click', handleEntry);

}

function handleEntry(e){
  transactionCount++;
  e.preventDefault();
  var $tr = $('#template').clone().attr('id', 'transaction'+transactionCount);
  var caption = $('input#caption').val();
  var date = $('input#date').val();
  var amount = $('input#amount').val();
  balance += parseInt(amount);
  $('#balance').text(balance);
  $('tbody').prepend($tr);
  $('tr#transaction'+transactionCount+' .caption').text(caption);
  $('tr#transaction'+transactionCount+' .date').text(date);
  if(amount>0){
    $('tr#transaction'+transactionCount+' .deposit').text(amount);
    $('tr#transaction'+transactionCount).addClass('dep');
  }
  else{
    $('tr#transaction'+transactionCount+' .withdrawal').text(amount);
    $('tr#transaction'+transactionCount).addClass('wit');
  }
  $('input').val('');

  $('th#t').on('click', function(){ //displays transactions alphabetically
  var arroftasks = [];
  var arrofsorted =[];
  for(var i =1; i<=transactionCount; i++){
    arroftasks.push($('tr#transaction'+i).text()+i);
  }
  arroftasks.sort();
  for(var r=0; r<arroftasks.length;r++){
      var hey = (arroftasks[r].charAt(arroftasks[r].length-1));
      arrofsorted.push($('tr#transaction'+hey));
  }
  $('tbody tr').detach();
  $('tbody').append(arrofsorted);
  });

  $('.deposits').on('click', function(){ //displays only deposits
      $('.wit').css('visibility', 'hidden');
      $('.dep').css('visibility', 'visible');
});
$('.withdrawals').on('click', function(){ //displays only withdrawals
    $('.dep').css('visibility', 'hidden');
    $('.wit').css('visibility', 'visible');
});
$('.all').on('click', function(){ //displays all
    $('.dep').css('visibility', 'visible');
    $('.wit').css('visibility', 'visible');
});
  // var storeAll = $('tbody tr').detach();
  // for(var i = 0; i<storeAll.length; i++)(
  //   if(storeAll[i].hasClass('dep')){
  //     $('tbody').append(storeAll[i]);
  //   }
  // )
  // debugger;

  // $('th#d').on('click', function(){
  // var arrofrows = [];
  // var arrofdates =[];
  // var arrofsortedates =[];
  // for(var i =1; i<=transactionCount; i++){
  //   arrofrows.push($('tr#row'+i).text());
  // }
  // for(var r=0; r<arrofrows.length;r++){
  //     var date = new Date(arrofrows[r].slice(-10);
  //     date = Date.parse(date);
  //     arrofdates.push(date);
  // }
  //
  // $('tbody tr').remove();
  // $('tbody').append(arrofsortedates);
  // });
}
