document.addEventListener("DOMContentLoaded", function() {
	// In itemClassName transfer item blocks class name.
	// this function will work with item block(div) and modal block
	// with class name "item-modal" under item block. 
	function openClose_item_modal(itemClassName) {
		var itemElement = document.querySelector("."+itemClassName);
		itemElement.addEventListener('click', function(){
			var modal = document.querySelector("." + itemClassName + "+ div.item-modal");
			modal.style.display = 'block';
			modalCloseBtn = modal.querySelector("." + itemClassName + "+ div.item-modal" + " .item-modal_close");
			modalCloseBtn.addEventListener('click', function(){
				modal.style.display = 'none';
			})
		})
	}

	openClose_item_modal("item-1");
	openClose_item_modal("item-2");
	openClose_item_modal("item-3");
	openClose_item_modal("item-4");
	openClose_item_modal("item-5");
	openClose_item_modal("item-6");

})
