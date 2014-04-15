(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#deposit').click(deposit);
    $('#withdraw').click(withdraw);
  }

  var balance = 1000;

  function getInput() {
    var input = $('#input').val() * 1;
    return input;
  }

  function deposit() {
    balance += getInput();
    $('#display').text('$' + balance);
    makeRow();
    $td1.text('$' + getInput()).addClass('dep');
    if(balance < 0){
        $('#display').text('$' + '(' + balance * -1 + ')');
        $td4.text('$' + '(' + balance * -1 + ')');
      } else {
        $td4.text('$' + balance);
      }
    $('#ledger > tbody').append($tr);
  }

  function withdraw() {
    balance -= getInput();
    makeRow();
    if(balance >= 0){
      $('#display').text('$' + balance);
      $td2.text('$' + getInput()).addClass('wd');
      $td4.text('$' + balance);
      $('#ledger > tbody').append($tr);
    } else {
      $('#display').text('$' + '(' + (balance - 50) * -1 + ')');
      $td2.text('$' + getInput()).addClass('wd');
      $td3.text('$' + 50).addClass('fee');
      $td4.text('$' + '(' + (balance - 50) * -1 + ')');
      $('#ledger > tbody').append($tr);
    }
  }

  var $td1, $td2, $td3, $td4, $tr;

  function makeRow() {
    $td1 = $('<td>');
    $td2 = $('<td>');
    $td3 = $('<td>');
    $td4 = $('<td>');
    $tr = $('<tr>');

    $tr.append($td1, $td2, $td3, $td4);
  }

})();
