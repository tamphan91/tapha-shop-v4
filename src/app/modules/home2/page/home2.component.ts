import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NikeService } from 'app/data/service/nike.service';
import { Observable } from 'rxjs';
import { NikeData } from '../../../data/service/nike.service';
import { ProjectService } from 'app/data/service/project.service';
import { Project } from 'app/data/schema/project';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home2Component implements OnInit {
  nikeDatas$: Observable<NikeData>;
  // projects$: Observable<Project[]>;
  // nikeDatas$: Observable<Project[]>;

  constructor(
    private nikeService: NikeService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.loadNikeDatas();
  }

  loadNikeDatas() {
    // this.nikeDatas$ = this.projectService.getAll();
    this.nikeDatas$ = this.nikeService.getAll();
    this.nikeDatas$.subscribe(data => {
      console.log(data);
    });
  }
}
