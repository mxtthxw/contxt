$(document).ready(function(){
  
  var widget = SC.Widget(document.getElementById('soundcloud-widget'));
  
  widget.bind(SC.Widget.Events.READY, function(){
  	console.log('Ready...');
  });
     
  $('#play-button').click(function() {
    widget.toggle();
  });

});