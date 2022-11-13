import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OntologyService } from 'src/app/service/ontology.service';
import { Topic } from '../topic-list/topic-list.component';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  topicName:string = '';
  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  haveSubclass: boolean = false;

  constructor(
    private _location: Location,
    private httpOnto: OntologyService,
    private router: Router,
    private route: ActivatedRoute    
  ) {}
  
  ngOnInit(): void {
    this.topicName = this.route.snapshot.params['topic']
    this.dataSource.paginator = this.paginator;

    this.httpOnto.getTopicDetails(this.topicName).subscribe({
      next: (data:any) => {
        if(data.data[0]['subClassName'] === undefined) {
          this.dataSource.data = data.data
          this.haveSubclass = false;
        }else {
          this.haveSubclass = true;
          this.dataSource.data = data.data
        }
      },
      error: (err) => {console.log(err)}
    })
  }

  handleBack() {
    this._location.back()
  }

  displayedColumns: string[] = ['no','vocabulary',"edit",'delete'];

}
