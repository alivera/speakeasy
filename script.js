var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
    return false;
  });
 
   var commands = {
    "add *item": add,
  };
  
  var add = function(item){
    var html = template(item);
    $(html).appendTo(".list"); 
  }
  
  annyang.addCommands(commands);
  annyang.start();
  
};

$(document).ready(main);