import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project.interface';
import { AppService } from 'src/app/service/app.service';
import { switchMap, tap } from 'rxjs';

@Component({
    moduleId: module.id,
    templateUrl: './portfolio-detail.html',
})
export class PortfolioDetailComponent implements OnInit {

    private activatedRoute = inject(ActivatedRoute);
    private appService = inject(AppService);
    private router = inject(Router);
    public project?: Project;

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.appService.getProjectById(id))

            ).subscribe(project => {
                if(!project) return this.router.navigate([''])
                return this.project = project;

            })
    }
}
