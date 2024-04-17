import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project.interface';
import { Observable, filter, map, tap } from 'rxjs';


@Injectable()
export class AppService {

    private baseUrl: string = '../../assets/data/projects.json'

    private http = inject(HttpClient);


    constructor(public store: Store<any>) {
        this.initStoreData();
    }

    initStoreData() {
        // theme
        const theme = 'dark';
        this.store.dispatch({ type: 'toggleTheme', payload: theme });

    }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.baseUrl).pipe(
            map(projects => projects.sort((a1: Project, a2: Project) => {
                if(a1.year > a2.year) return -1;
                if(a1.year < a2.year) return 1;
                return 0;
            }))
        )
    }

    getProjectById(id: string): Observable<Project | undefined> {
        return this.http.get<Project[]>(this.baseUrl).pipe(
            map(projects => projects.filter(p => p.id === Number(id))),
            map(projects => projects[0]),

        )
    }
}
