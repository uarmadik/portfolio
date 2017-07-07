document.addEventListener("DOMContentLoaded", function(){

	var btn = document.getElementById("menu-btn");
	var span = document.querySelectorAll("#menu-btn span");
	btn.addEventListener("click", function() {

		function btn_menuOpene(){
			menu.style.display = "block";
			
			span[0].style.transform = "rotate(45deg)";
			span[0].style.top = "19px";
					
			span[1].style.display = "none";
					
			span[2].style.transform = "rotate(-45deg)";
			span[2].style.top = "19px";
		}
		function btn_menuClose(){
			menu.style.display = "none";

			span[0].style.transform = "rotate(0deg)";
			span[0].style.top = "10px";
					
			span[1].style.display = "block";
					
			span[2].style.transform = "rotate(0deg)";
			span[2].style.top = "30px";
		}


		var menu = document.querySelector(".nav-wrap ul");
		var menuDisplayValue = window.getComputedStyle(menu).display;
		if (menuDisplayValue == "none") {
			btn_menuOpene();

			menu.addEventListener('click', function(){
				btn_menuClose();
			});

		}
		else if (menuDisplayValue == "block") {
			btn_menuClose();
		}			
	})

})



