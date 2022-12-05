window.addEventListener('DOMContentLoaded', function(){
    console.log('LOADING IS ENDED')
    // HEADER BURGER /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.querySelector('#burger').addEventListener('click',function(){
        document.querySelector('.header').classList.add('header_burger_is_open')
    })
    document.querySelector('#burger-close').addEventListener('click',function(){
        document.querySelector('.header').classList.remove('header_burger_is_open')
    })
    // HEADER SEARCH /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.querySelector('#search').addEventListener('click',function(){
        document.querySelector('.header-top__nav-search').classList.add('header-top__nav-search_is_open')
        if(document.body.clientWidth < 1920 ){
            document.querySelector('.header-top__burger').classList.add('is-hidden')
            document.querySelector('.header-top__link').classList.add('is-hidden')
        }
    })
    document.querySelector('.nav-search__close').addEventListener('click',function(){
        document.querySelector('.header-top__nav-search').classList.remove('header-top__nav-search_is_open')
        document.querySelector('.header-top__burger').classList.remove('is-hidden')
        document.querySelector('.header-top__link').classList.remove('is-hidden')
    })
    // HEADER PAINTING LIST //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.querySelectorAll('.painting-list__heading').forEach(function(paintingListHeading){
        paintingListHeading.addEventListener('click',function(){
            var element = document.querySelector('.painting-list__item_is_open')
            if(!element){
                paintingListHeading.parentElement.classList.add('painting-list__item_is_open');
            }
            else if(element == paintingListHeading.parentElement){
                paintingListHeading.parentElement.classList.remove('painting-list__item_is_open');
            }
            else{
                document.querySelectorAll('.painting-list__item').forEach(function(paintingListItem){
                    paintingListItem.classList.remove('painting-list__item_is_open')
                });
                paintingListHeading.parentElement.classList.add('painting-list__item_is_open');
            }
        });
    });
    // GALLERY CENTARY ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let rangeGallery = ['1-12'];
    document.querySelectorAll('.gallery__century-check-input').forEach((checkItem) => {
        checkItem.addEventListener('click', (event)=>{
            if(rangeGallery.length === 1 && rangeGallery[0] === checkItem.dataset.range){
                checkItem.checked = true;
            }
            else{
                if(checkItem.checked){
                    rangeGallery.push(checkItem.dataset.range);
                }
                else{
                    rangeGallery = rangeGallery.filter(item => item !== checkItem.dataset.range);
                }
            }
            console.log(rangeGallery);
        });
    });
    // CATALOG ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // document.querySelectorAll('.catalog__country-item').forEach(function(catalogCountryItem){
    //     catalogCountryItem.addEventListener('click', function(){
    //         console.log('click country');
    //         document.querySelectorAll('.catalog__country-item').forEach(function(catalogCI){
    //             catalogCI.classList.remove('catalog__country-item_is_active')
    //         });
    //         catalogCountryItem.classList.add('catalog__country-item_is_active')
    //         document.querySelectorAll('.catalog__info-accordion').forEach(function(catinfo){
    //             catinfo.classList.remove('catalog__info-accordion_is_active')
    //         });
    //         var lang = 'info-' + catalogCountryItem.dataset.lang;
    //         document.getElementById(lang).classList.add('catalog__info-accordion_is_active');
    //         document.querySelector('.accordion__artists-btn_is_active').classList.remove('accordion__artists-btn_is_active');
    //         document.getElementById(lang).querySelector('.accordion__artists-btn').classList.add('accordion__artists-btn_is_active');
    //         var name = document.getElementById(lang).querySelector('.accordion__artists-btn_is_active').dataset.name;
    //         document.querySelectorAll('.catalog__info-card').forEach(function(catcard){
    //             catcard.classList.remove('catalog__info-card_is_active');
    //         });
    //         document.querySelector(`[data-painter="${name}"]`).classList.add('catalog__info-card_is_active');

    //     });
    // });
    // document.querySelectorAll(".accordion__heading").forEach((item)=>{
    //     item.addEventListener('click', (e)=>{
    //         console.log('click heading');
    //         e.preventDefault();
    //         if(document.querySelector('.accordion__item_open') !== null && document.querySelector('.accordion__item_open') !== item.parentElement){
    //             document.querySelector('.accordion__item_open').classList.remove('accordion__item_open');
    //         }
    //         item.parentElement.classList.toggle('accordion__item_open');
    //     });
    // });
    // document.querySelectorAll('.accordion__artists-btn').forEach(function(PntrBtn){
    //     PntrBtn.addEventListener('click',function(){
    //         console.log('click artist');
    //         var name = PntrBtn.dataset.name;
    //         document.querySelectorAll('.catalog__info-card').forEach(function(TabContent){
    //             TabContent.classList.remove('catalog__info-card_is_active');
    //         });
    //         document.querySelector('.accordion__artists-btn_is_active').classList.remove('accordion__artists-btn_is_active');
    //         PntrBtn.classList.add('accordion__artists-btn_is_active')
    //         document.querySelector(`[data-painter="${name}"]`).classList.add('catalog__info-card_is_active')
    //     });
    // });
    // PROJECT ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.querySelectorAll('.tooltip').forEach(function(tooltip){
        tooltip.addEventListener('click',function(){
            console.log('tooltip')
            tooltip.classList.toggle('is-open');
        });
    });
});