import { Component, OnInit } from '@angular/core';
import { CheckpointCriteriaStore } from 'src/app/stores/checkpoint-criteria-store';
import { CheckPointCriteria } from 'src/app/models/check-point-criteria.model';

@Component({
  selector: 'app-check-point-criteria',
  templateUrl: './check-point-criteria.component.html',
  styleUrls: ['./check-point-criteria.component.css']
})
export class CheckPointCriteriaComponent implements OnInit {
  checkpointCriterias: CheckPointCriteria[];
  
  constructor(private checkpointCriteriaStore: CheckpointCriteriaStore) { 
    this.checkpointCriteriaStore.init();
  }

  ngOnInit() {
    this.checkpointCriteriaStore.getAll$().subscribe(checkpointCriterias => {this.checkpointCriterias = checkpointCriterias;})
  }

}
