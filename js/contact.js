document.addEventListener("DOMContentLoaded", function(){
	$.ajax({
		type: "POST",
		url: "../php/contact.php",
		//dataType: "JSON",
		success: function(data){
			
			var phoneNumberView = document.getElementById("phone-number-view");
			phoneNumberView.innerHTML = JSON.parse(data)[0];

			var emailView = document.getElementById("email-view");
			emailView.innerHTML = JSON.parse(data)[1];
			
		}

	})
})