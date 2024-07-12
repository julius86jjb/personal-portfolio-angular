import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Project } from 'src/app/interfaces/project.interface';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
    storeData: any;
    activeTab = 'all';

    public projects: Project[] = [] ;

    private appService = inject(AppService)

    constructor(public store: Store<any>) {
        this.initStore();
    }
    ngOnInit(): void {
        this.getProjects()
    }


    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }

    getProjects() {
        this.appService.getProjects()
            .subscribe((projects) => {
                this.projects = projects;
            });
    }



}
