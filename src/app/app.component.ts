import { Component, OnInit, ViewChild,NgModule} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Papa } from 'ngx-papaparse';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataList: any;
  fields : any;
  selectIssueId: number;
  issueCountList = [];
  defaultValue = "";

  ngOnInit() { }


  constructor(private papa: Papa) {

}

//Function for handling
  fileChangeListener($event): void {

    const file = ($event.target.files)[0];
    var issueCountArr = [];

    if(!file.name.endsWith(".csv")) {
      alert('Please upload only csv files');
      return;
    }

    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      let csv:string  = reader.result as string;
      this.papa.parse(csv,{
          header: true,
          skipEmptyLines: true,
          complete: (result,file) => {
            this.dataList = result.data;

            for (let i in this.dataList) {
              const issueData:any = {};
              issueData.id = this.dataList[i]["Issue count"];
              this.issueCountList.push(issueData);
           }


           this.issueCountList = this.setUniqueIssueCount( this.issueCountList);
           this.issueCountList.sort(function(a, b){
            return a.id-b.id;
        })

          }
       })
  }
  }

//Function to  remove duplicate issue id for drop down
  setUniqueIssueCount(issueCountArr) {
   let dupRemovedArr =  _.map(
      _.uniq(
          _.map(issueCountArr, function(obj){
              return JSON.stringify(obj);
          })
      ), function(obj) {
          return JSON.parse(obj);
      }
  );
  return dupRemovedArr;
  }

}
