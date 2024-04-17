import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
import { Store } from '@ngrx/store';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './personal-portfolio.html',
})
export class PersonalPortfolioComponent {

    activeTab = 'all';
    storeData: any;

    constructor(public store: Store<any>) {
        this.initStore();
    }

    @Input() feedbacks: any = [
        {
            id: 1,
            name: 'amelia smith',
            role: 'Founder of Alpha Design',
            thumbnail: '/assets/images/personal-portfolio/founder-avatar.png',
            message:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
    ];

    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 4000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.7,
            },
            600: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
            1142: {
                slidesPerView: 5,
            },
        },
        modules: [Autoplay],
    };

    config1: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation:{
            nextEl: '.portfolio-slider-button-next',
            prevEl: '.portfolio-slider-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1142: {
                slidesPerView: 3,
            },
        },
        modules: [Navigation, Autoplay],
    };
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
}
