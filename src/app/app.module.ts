import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

//swiper
import { SwiperModule } from 'swiper/angular';

// counter
import { CountUpModule } from 'ngx-countup';

// lightbox
import { LightboxModule } from 'ngx-lightbox';

// apexchart
import { NgApexchartsModule } from 'ng-apexcharts';

// store
import { StoreModule } from '@ngrx/store';
import { indexReducer } from './store/index.reducer';

// service
import { AppService } from './service/app.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Layout
import { HeaderComponent } from './layout/header';
import { FooterComponent } from './layout/footer';
import { ErrorComponent } from './error';

//components


import { PersonalPortfolioComponent } from './personal-portfolio';
import { EducationComponent } from './components/education/education.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioDetailComponent } from './components/portfolio/portfolio-detail';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPageScrollModule } from 'ngx-page-scroll';




@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ErrorComponent,
        PortfolioComponent,
        PortfolioDetailComponent,
        PersonalPortfolioComponent,
        EducationComponent,
        AboutMeComponent,
        TechnologiesComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        SwiperModule,
        CountUpModule,
        LightboxModule,
        NgApexchartsModule,
        StoreModule.forRoot({ index: indexReducer }),
        HttpClientModule,
        ReactiveFormsModule,
        NgxPageScrollModule
    ],
    providers: [AppService, Title],
    bootstrap: [AppComponent],
})
export class AppModule { }
