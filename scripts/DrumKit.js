$(document).on('keydown', function(e) {
//1. indentify key and paly sound accordingly 
//2. display border around the key pressed and remove it after 100 millisecond = 1 second

 if (e.keyCode == 65) {
  	$('#clapAudio')[0].play(); 
 	$('#A').css('border', '6px solid yellow')
 	setTimeout(removeBorder, 100);
  }
   if (e.keyCode == 83) {
   	$('#boomAudio')[0].play(); 			  
 	$('#S').css('border', '6px solid yellow')
 	setTimeout(removeBorder, 100);
  }
   if (e.keyCode == 68) {
   	$('#hihatAudio')[0].play(); 			   	
 	$('#D').css('border', '6px solid yellow')
 	setTimeout(removeBorder, 100);
  }
   if (e.keyCode == 70) {
   	$('#kickAudio')[0].play(); 	
 	$('#F').css('border', '6px solid yellow')
 	setTimeout(removeBorder, 100);
  }
   if (e.keyCode == 71) {
   	$('#rideAudio')[0].play();
 	$('#G').css('border', '6px solid yellow')
 	setTimeout(removeBorder, 100);
  }
   if (e.keyCode == 72) {
   	$('#openHatAudio')[0].play();
 	$('#H').css('border', '6px solid yellow')
 	setTimeout(removeBorder, 100);
  }
   if (e.keyCode == 74) {
   	$('#snareAudio')[0].play();
 	$('#J').css('border', '6px solid yellow')
 	setTimeout(removeBorder, 100);
  }
   if (e.keyCode == 75) {
   	$('#tinkAudio')[0].play();			   	
 	$('#K').css('border', '6px solid yellow')
 	setTimeout(removeBorder, 100);
  }
   if (e.keyCode == 76) {
   	$('#tomAudio')[0].play();
 	$('#L').css('border', '6px solid yellow')
 	setTimeout(removeBorder, 100);
  }
});

function removeBorder() {
		$('#A').css('border', 'none')
		$('#S').css('border', 'none')
		$('#D').css('border', 'none')
		$('#F').css('border', 'none')
		$('#G').css('border', 'none')
		$('#H').css('border', 'none')
		$('#J').css('border', 'none')
		$('#K').css('border', 'none')
		$('#L').css('border', 'none')
}
