// In itemClassName transfer item blocks class name.
	// this function will work with item block(div) and modal block
	// with class name "item-modal" under item block. 
function openClose_item_modal(itemClassName) {
		var itemElement = document.querySelector("."+itemClassName);
		itemElement.addEventListener('click', function(){
			var modal = document.querySelector("." + itemClassName + "+ div.item-modal");
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			modalCloseBtn = modal.querySelector("." + itemClassName + "+ div.item-modal" + " .item-modal_close");
			modalCloseBtn.addEventListener('click', function(){
				modal.style.display = 'none';
				document.body.style.overflow = 'auto';
			})
		})
	}

// validation contact form
function validationContactForm(){
	function validationEmail(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);	
	}
	function validationSubmit(){
		var submitBtn = document.querySelector('#contact input[type="submit"]');
		submitBtn.addEventListener('click', function(e){
			var inputName = document.querySelector('#contact input[name="name"]').value;
			var inputEmail = document.querySelector('#contact input[name="email"]').value;
			var inputMessage = document.querySelector('#contact textarea[name="message"]').value;
			if (!inputName) {
				alert('Enter your name, pleace');
				e.preventDefault();
				return false;
			}
			
			else if (!inputEmail || !emailValidStatus){
				alert('Enter correct email, pleace');
				e.preventDefault();
				return false;
			}

			else if (!inputMessage) {
				alert('Write a message, pleace');
				e.preventDefault();
				return false;
			}
			else {

				$.ajax({
					url: '../php/mail.php',
					type: 'POST',
					data: $('#contact form').serialize(),
					dataType: 'text',
					success: function(data) {
						alert(data);
						document.querySelector('#contact input[name="name"]').value = null;
						document.querySelector('#contact input[name="email"]').value = null;
						document.querySelector('#contact textarea[name="message"]').value = null;
					}
				})

				e.preventDefault();


			}
		})
	}
	var emailValidStatus;
	var inputEmail = document.querySelector('#contact input[name="email"]');
		inputEmail.addEventListener('change', function(){
		var email = document.querySelector('#contact input[name="email"]').value;
		emailValidStatus = validationEmail(email);
		if(!emailValidStatus) {
			inputEmail.style.borderBottom = '1px solid red';
			return false;
		}
		else if (emailValidStatus) {
			inputEmail.style.borderBottom = '1px solid #dcdcdc';
		}		
	})

	validationSubmit();
}

document.addEventListener("DOMContentLoaded", function() {
	openClose_item_modal("item-1");
	openClose_item_modal("item-2");
	openClose_item_modal("item-3");
	openClose_item_modal("item-4");
	openClose_item_modal("item-5");
	openClose_item_modal("item-6");
	
	validationContactForm();

})


