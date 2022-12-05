// Инициализация Swiper
new Swiper('.gallery-slider',{
    navigation:{
        nextEl: '.gallery-slider__button-next',
        prevEl: '.gallery-slider__button-prev'
    },
    pagination:{
        el:'.gallery-slider__pagination',
        type: 'fraction',
    },
    // Выключение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    // grabCursor: true,
    // Переключение при клике на слайд
    slideToClickedSlide: false,
    // Управление клавиатурой
    keyboard:{
        // Выключить/Включить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
    },
    // Автовысота
    autoHeight: false,
    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: true,
    // Активный слайд по центру
    centeredSlides: false,
    // Стартовый слайд
    initialSlide: 0,
    breakpoints: {
        // больше чем указанное значение
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,

        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 28,
        },
        1500: {
            // Количество слайдов для показа
            slidesPerView: 3,
            // Отступ между слайдами
            spaceBetween: 50,
            // Количество пролистываемых слайдов
            slidesPerGroup: 3,
            // Мультирядность
        }
    }
});

new Swiper('.events-slider',{
    navigation:{
        nextEl: '.events-slider__button-next',
    },
    pagination:{
        el:'.events-slider__pagination',
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    slideToClickedSlide: false,
    keyboard:{
        enabled: true,
        onlyInViewport: true,
    },
    autoHeight: false,
    watchOverflow: true,
    centeredSlides: false,
    initialSlide: 0,

    breakpoints: {
        // больше чем указанное значение
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,

        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 34,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 28,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        }
    }
});

new Swiper('.partner-slider',{
    navigation:{
        nextEl: '.partner-slider__button-next',
        prevEl: '.partner-slider__button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    keyboard:{
        enabled: true,
        onlyInViewport: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});