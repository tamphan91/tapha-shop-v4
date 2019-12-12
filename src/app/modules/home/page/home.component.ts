import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from '../../../data/service/project.service';
import { Project } from '../../../data/schema/project';
import { Observable } from 'rxjs';

import { MyModalComponent } from '../modal/my-modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects$: Observable<Project[]>;

  constructor(
    private modalService: NgbModal,
    private projectService: ProjectService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projects$ = this.projectService.getAll();
    // Test loader
    this.http.get('https://tapha-shop-api.herokuapp.com/api/nike/sale')
    .subscribe(data => {
      console.log(data);
    });
  }

  openMyModal() {
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.id = 1;
    modalRef.result.then((result) => {
      console.log(result);
    });
  }
}
