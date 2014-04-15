(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#deposit').click(deposit);
    $('#withdraw').click(withdraw);
  }

  var balance = 1000;

  function getAmount() {
    var value = $('#input').val() * 1;
    return value;
  }

function updateBalance() {
  $('#balance').text('$' + balance + '.00');
}

function formatCurrency(amount) {
  if(amount !== null) {
    if(amount >= 0) {
      return '$' + amount + '.00';
    } else {
      return '$('+ amount * -1 + '.00)';
    }
  }

  return '';
}

  function deposit() {
    var value = getAmount();
    balance += value;
    updateBalance();
    addLedger(value, null, null);
  }

  function withdraw() {
    var value = getAmount();
    balance -= value;
    var fee = balance < 0 ? 50 : null;
    balance = fee ? balance - fee : balance;
    updateBalance();
    addLedger(null, value, fee);
  }

  function addLedger(deposit, withdraw, fee) {
    var $tr = $('<tr>');
    var $deposit = $('<td');
    var withdraw = $('<td');
    var $fee = $('<td');
    var balance = $('<td');

    $deposit.addClass('dep');
    $withdraw.addClass('wd');
    $fee.addClass('fee');

    $deposit.text(formatCurrency(deposit));
    $withdraw.text(formatCurrency(withdraw));
    $fee.text(formatCurrency(fee));
    $balance.text(formatCurrency(balance));

    $tr.append($deposit, $withdraw, $fee, $balance);
    $('#ledger > tbody').append($tr);
  }

})();
