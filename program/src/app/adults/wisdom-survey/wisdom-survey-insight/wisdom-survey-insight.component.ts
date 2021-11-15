import { Component, OnInit } from '@angular/core';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-wisdom-survey-insight',
  templateUrl: './wisdom-survey-insight.component.html',
  styleUrls: ['./wisdom-survey-insight.component.scss'],
})
export class WisdomSurveyInsightComponent implements OnInit {
  multi: any[] = [];
  view: any[] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;

  anxiety = [];
  Stress = [];
  Emotion = [];
  Calmness = [];
  confidence = [];
  relationships = [];
  addictions = [];
  criticism = [];
  Campassion = [];
  Happiness = [];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  
  public chartdata = [
  ]
  userId:any

  constructor(    private service:AdultsService,    ) { 
    this.userId=JSON.parse(localStorage.getItem("userId"))
      service.wisdomSurveyinsightsummary(this.userId).subscribe((r)=>{
        console.log(r)
        let result = []; 
        var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
        r.forEach((d) => {
          if(!(result.some((t) => t['wsDate'] === d['wsDate']))) {
            let dd = new Date(d['wsDate'])
            let name = monthNames[dd.getMonth()];
            let day = dd.getDay();
            result.push(
                {
                  name: name + ' ' + day,
                  value: parseInt(d['Score'])
          })
          }
        })
        var uniq = {}
        var arrFiltered = result.filter(obj => !uniq[obj.name] && (uniq[obj.name] = true));
        this.multi = [
          {
          name: 'Wisdom Survey',
          series: arrFiltered
        }
      ]
        // this.multi[0]['series'] = result;
      });
    this.userId=JSON.parse(localStorage.getItem("userId"))
      service.wisdomSurveyinsights(this.userId).subscribe((r)=>{
        console.log(r)
        let result = [];
        var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
        r.forEach((d, i) => {
          // if(!(result.some((t) => t['wsDate'] === d['wsDate']))) {
            // let dd = new Date(d['wsDate'])
            let name = monthNames[d['month']];
            // let day = dd.getDay();
              if(d['QuestionID'] === 122) this.anxiety.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
              if(d['QuestionID'] === 123) this.Stress.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
              if(d['QuestionID'] === 124) this.Emotion.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
              if(d['QuestionID'] === 125) this.Calmness.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
              if(d['QuestionID'] === 126) this.confidence.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
              if(d['QuestionID'] === 127) this.relationships.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
              if(d['QuestionID'] === 128) this.addictions.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
              if(d['QuestionID'] === 129) this.criticism.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
              if(d['QuestionID'] === 130) this.Campassion.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
              if(d['QuestionID'] === 131) this.Happiness.push( {
                date: name,
                last: r.length === i + 1,
                r: parseInt(d['Score']) * 10
              })
          // }
        })
        this.chartdata = result
      });
  }

  ngOnInit() {}

  onSelect(event){

  }


}
