// Аккордеон
const accordionItems = document.querySelectorAll(".accordion__heading");
if(accordionItems){
	accordionItems.forEach(function(item){
		item.addEventListener("keydown",(e)=>{
			if(e.keyCode === 13){
				clickAccordion(e);
			}
		});
		item.addEventListener("click", function (e) {
			clickAccordion(e);
		});
		function clickAccordion(e){
			if (!item.classList.contains('active')) {

				// Закрываем другие пункты

				let oldItem = item.closest(".accordion").querySelector(".accordion__heading.active");
				if(oldItem){
					oldItem.classList.remove('active');
					let oldItemHeight = oldItem.nextElementSibling.clientHeight + 'px';
					oldItem.nextElementSibling.style.height = oldItemHeight;
					setTimeout(function () {
						oldItem.nextElementSibling.style.height = '0px';
					}, 0);
					setTimeout(function () {
						oldItem.nextElementSibling.style.display = 'none';
					}, 500);
				}


				// Открываем выбранный пункт
				item.classList.add("active");
				let itemContent = item.nextElementSibling;
				itemContent.style.display = "block";
				itemContent.style.height = 'auto';
				let height = itemContent.clientHeight + 'px';
				itemContent.style.height = '0px';
				setTimeout(function () {
					itemContent.style.height = height;
				}, 0);

			}else{

				// Закрываем выбранный пункт
				item.classList.remove("active");
				let height = item.nextElementSibling.clientHeight + 'px';
				item.nextElementSibling.style.height = height;
				setTimeout(function () {
					item.nextElementSibling.style.height = '0px';
				}, 0);
				setTimeout(function () {
					item.nextElementSibling.style.display = 'none';
				}, 500);
			};
		}
	});
};

