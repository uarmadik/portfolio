document.addEventListener("DOMContentLoaded", function(){
	$.ajax({
		type: "POST",
		url: "../php/contact.php",
		success: function(data){
			
			var phoneNumberView = document.getElementById("phone-number-view");
			phoneNumberView.innerHTML = JSON.parse(data)[0];

			var emailView = document.getElementById("email-view");
			emailView.innerHTML = JSON.parse(data)[1];

			var linkedIn = document.querySelector('.footer-content-social a[title="LinkedIn"]');
			linkedIn.setAttribute('href', JSON.parse(data)[2]);

			var facebook = document.querySelector('.footer-content-social a[title="Facebook"]');
			facebook.setAttribute('href', JSON.parse(data)[3]);

			var googlePlus = document.querySelector('.footer-content-social a[title="GooglePlus"]');
			googlePlus.setAttribute('href', JSON.parse(data)[4]);

		}

	})
})