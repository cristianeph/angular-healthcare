import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.component.html',
  styleUrls: ['./history-form.component.css']
})
export class HistoryFormComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
  }

  private getParams() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        console.log(this.id);
        if (this.id > 0) {
          this.getObject();
        } else {
          /*this.model = this.resetObject();*/
        }
      });
  }

  private getObject() {}

  private resetObject() {}

  private onSubmit() {
    console.log('Submitting form');
  }

}
