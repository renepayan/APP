$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});

	var output = $('#output');

	$.ajax({
		url: 'https://payan.no-ip.org/APP/view.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = '<h1>'+item.NOMBRE+'</h1><video src="https://payan.no-ip.org/'
				+ item.DIRECTORIO+'" controls="true"></video></p>';
			
				output.append(landmark);
			});
		},
error: function(err, textStatus, errorThrown) {
                 output.text("There was an error [" + textStatus + "] loading the data.");
                 console.log(err);
                 console.log(errorThrown);
              } 
	});
});
