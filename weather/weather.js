$(document).ready(function(){

	$('#submitWeather').click(function(){

		var city = $("#city").val();

		if(city != '') {
			
			$.ajax({

				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + 
				"&APPID=e251a9b204aacb6126599cbd89e693f7",
				type: "GET",  
				dataType: "jsonp",
				success: function(data) {
					var widget = show(data);
						console.log(data);
					$("#show").html(widget);
					$('#city').val('');
				}

			});

		}else {
			$("#error").html('없는 도시 입니다.');
		}
	});
});

function show(data){
	
	return "<h2 style='font-size:20px;'><strong> 현재 지역, 현재 국가  </strong> : " + data.name + ", "+ data.sys.country +" </h2></br>" +
		   "<h3><strong>날씨</strong> : "+ data.weather[0].main +"</h3>" +
		   "<h3><strong>설명</strong> : <img src='http://openweathermap.org/img/w/10d.png'>"+ data.weather[0].description +"</h3>" +
		   "<h3><strong>기온</strong> : "+ data.main.temp + "&deg;C</h3>" +
		   "<h3><strong>기압</strong> : "+ data.main.pressure + " hPa</h3>" +
		   "<h3><strong>습도</strong> : "+ data.main.humidity + "%</h3>" +
		   "<h3><strong>최저기온</strong> : "+ data.main.temp_min + "&deg;C</h3>" +
		   "<h3><strong>최고기온</strong> : "+ data.main.temp_max + "&deg;C</h3>" +
		   "<h3><strong>바람속도</strong> : "+ data.wind.speed + " m/s</h3>" +
		   "<h3><strong>바람각도</strong> : "+ data.wind.deg + "&deg;</h3>";
}