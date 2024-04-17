import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error';
import { PortfolioDetailComponent } from './components/portfolio/portfolio-detail';
import { PersonalPortfolioComponent } from './personal-portfolio';

const routes: Routes = [
    { path: 'portfolio-detail/:id', component: PortfolioDetailComponent },
    { path: 'personal-portfolio', component: PersonalPortfolioComponent },
    { path: '', component: PersonalPortfolioComponent, title: 'Julio Jimenez Portfolio' },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
