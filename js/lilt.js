$(document).ready(function(){
	
	var startHour = $('#time-start>span.hour').html();
	var startMinute = $('#time-start>span.minute').html();
	//var endHour = 0;
	//var endMinute = 0;
	
	$('#time-end').draggable({
		axis: 'y',
		containment: 'parent',
		drag: function(event, ui){
			var position = $(this).position();
			var y = position.top;
			y = Math.round(y / 2.14);
			var endMinute = parseInt(startMinute) + y;
			var endHour = parseInt(startHour) + Math.floor(endMinute / 60);
			endMinute = endMinute - (Math.floor(endMinute / 60) * 60);
			$(this).html(endHour+":"+endMinute);
		}
	});
	
});
