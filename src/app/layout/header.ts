import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: './header.html',
    styles: ['.pointer { cursor: pointer }']

})
export class HeaderComponent {

    private activatedRoute = inject(ActivatedRoute)

    storeData: any;
    showMenu = false;
    showSearch = false;
    constructor(public store: Store<any>, public router: Router, private scroller: ViewportScroller) {
        this.initStore();
    }
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }

    // Mobile menu js
    toggleMenu() {
        if (window.innerWidth < 1024) {
            this.showMenu = !this.showMenu;
        } else {
            this.showMenu = false;
        }
    }

    // Search Bar - Header
    toggleSearch() {
        this.showSearch = !this.showSearch;
    }

    goSection(section: string) {
        console.log(section)

        if (this.activatedRoute.snapshot.firstChild?.url.length !== 0) {
            this.router.navigate(['']).finally(() => {
                console.log('entra')
                const element = document.getElementById(section);
                console.log(element)
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            })


        }
        this.scroller.scrollToAnchor(section);
    }
}
