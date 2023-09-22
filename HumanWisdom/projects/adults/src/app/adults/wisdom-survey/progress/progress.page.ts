import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#E58D82',
      backgroundColor: 'rgba(229, 141, 130, 0.2)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public chartData = [
    {
      lineChartData: [{ data: [], label: 'Anxiety' }],
      lineChartLabels: [],
      enable: false
    },
    {
      lineChartData: [{ data: [], label: 'Stress' }],
      lineChartLabels: [],
      enable: false
    },
    {
      lineChartData: [{ data: [], label: 'Control over Emotion' }],
      lineChartLabels: [],
      enable: false
    },
    {
      lineChartData: [{ data: [], label: 'Calmness' }],
      lineChartLabels: [],
      enable: false
    },
    {
      lineChartData: [{ data: [], label: 'Self-confidence' }],
      lineChartLabels: [],
      enable: false
    },
    {
      lineChartData: [{ data: [], label: 'Conflict in relationships' }],
      lineChartLabels: [],
      enable: false
    },
    {
      lineChartData: [{ data: [], label: 'Struggle with addictions' }],
      lineChartLabels: [],
      enable: false
    },
    {
      lineChartData: [{ data: [], label: 'Coping with criticism' }],
      lineChartLabels: [],
      enable: false
    },
    {
      lineChartData: [{ data: [], label: 'Campassion' }],
      lineChartLabels: [],
      enable: false
    },
    {
      lineChartData: [{ data: [], label: 'Happiness' }],
      lineChartLabels: [],
      enable: false
    },
  ]
  tableData = [
  {
    label: 'Anxiety',
    value: [],
    enable: false
  },
  {
    label: 'Stress',
    value: [],
    enable: false
  },
  {
    label: 'Control over Emotion',
    value: [],
    enable: false
  },
  {
    label: 'Calmness',
    value: [],
    enable: false
  },
  {
    label: 'Self-confidence',
    value: [],
    enable: false
  },
  {
    label: 'Conflict in relationships',
    value: [],
    enable: false
  },
  {
    label: 'Struggle with addictions',
    value: [],
    enable: false
  },
  {
    label: 'Coping with criticism',
    value: [],
    enable: false
  },
  {
    label: 'Campassion',
    value: [],
    enable: false
  },
  {
    label: 'Happiness',
    value: [],
    enable: false
  }
];

  constructor(
    private location: Location,
    private service: AdultsService
  )
  {
  let userId = JSON.parse(localStorage.getItem("userId"))
  this.service.wisdomSurveyinsights(userId).subscribe((r) => {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    r = r.sort((a,b) => a['month'] - b['month']);
    r = r.sort((a,b) => a['year'] - b['year']);
    r.forEach((d) => {
      let name = monthNames[d['month'] - 1];

      if (d['QuestionID'] === 122) {
        this.tableData[0]['enable'] = true;
        if(this.tableData[0]['value'].length < 6) {
          this.tableData[0]['value'].push(
            {
              'No': this.tableData[0]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[0]['lineChartData'][0]['data'].length < 6) {
          this.chartData[0]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
          this.chartData[0]['enable'] = true;
          if(!(this.chartData[0]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
            this.chartData[0]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
          }else {
            this.chartData[0]['lineChartLabels'].push(name.substring(0, 3));
          }
        }
      }
      if (d['QuestionID'] === 123) {
        this.tableData[1]['enable'] = true;
        if(this.tableData[1]['value'].length < 6) {
          this.tableData[1]['value'].push(
            {
              'No': this.tableData[1]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[1]['lineChartData'][0]['data'].length < 6) {
          this.chartData[1]['enable'] = true;
          this.chartData[1]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
          if(!(this.chartData[1]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
            this.chartData[1]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
          }else {
            this.chartData[1]['lineChartLabels'].push(name.substring(0, 3));
          }
        }
      }
      if (d['QuestionID'] === 124) {
        this.tableData[2]['enable'] = true;
        if(this.tableData[2]['value'].length < 6) {
          this.tableData[2]['value'].push(
            {
              'No': this.tableData[2]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[2]['lineChartData'][0]['data'].length < 6) {
          this.chartData[2]['enable'] = true;
          this.chartData[2]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
          if(!(this.chartData[2]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
            this.chartData[2]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
          }else {
            this.chartData[2]['lineChartLabels'].push(name.substring(0, 3));
          }
        }
      }
      if (d['QuestionID'] === 125) {
        this.tableData[3]['enable'] = true;
        if(this.tableData[3]['value'].length < 6) {
          this.tableData[3]['value'].push(
            {
              'No': this.tableData[3]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[3]['lineChartData'][0]['data'].length < 6) {
          this.chartData[3]['enable'] = true;
          this.chartData[3]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
          if(!(this.chartData[3]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
            this.chartData[3]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
          }else {
            this.chartData[3]['lineChartLabels'].push(name.substring(0, 3));
          }
        }
      }
      if (d['QuestionID'] === 126) {
        this.tableData[4]['enable'] = true;
        if(this.tableData[4]['value'].length < 6) {
          this.tableData[4]['value'].push(
            {
              'No': this.tableData[4]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[4]['lineChartData'][0]['data'].length < 6) {
            this.chartData[4]['enable'] = true;
            this.chartData[4]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
            if(!(this.chartData[4]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
              this.chartData[4]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
            }else {
              this.chartData[4]['lineChartLabels'].push(name.substring(0, 3));
            }
        }
      }
      if (d['QuestionID'] === 127) {
        this.tableData[5]['enable'] = true;
        if(this.tableData[5]['value'].length < 6) {
          this.tableData[5]['value'].push(
            {
              'No': this.tableData[5]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[5]['lineChartData'][0]['data'].length < 6) {
          this.chartData[5]['enable'] = true;
          this.chartData[5]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
          if(!(this.chartData[5]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
            this.chartData[5]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
          }else {
            this.chartData[5]['lineChartLabels'].push(name.substring(0, 3));
          }
        }

        }
      if (d['QuestionID'] === 128) {
        this.tableData[6]['enable'] = true;
        if(this.tableData[6]['value'].length < 6) {
          this.tableData[6]['value'].push(
            {
              'No': this.tableData[6]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[6]['lineChartData'][0]['data'].length < 6) {
            this.chartData[6]['enable'] = true;
            this.chartData[6]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
            if(!(this.chartData[6]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
              this.chartData[6]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
            }else {
              this.chartData[6]['lineChartLabels'].push(name.substring(0, 3));
            }
        }
       }
      if (d['QuestionID'] === 129) {
        this.tableData[7]['enable'] = true;
        if(this.tableData[7]['value'].length < 6) {
          this.tableData[7]['value'].push(
            {
              'No': this.tableData[7]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[7]['lineChartData'][0]['data'].length < 6) {
            this.chartData[7]['enable'] = true;
            this.chartData[7]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
            if(!(this.chartData[7]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
              this.chartData[7]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
            }else {
              this.chartData[7]['lineChartLabels'].push(name.substring(0, 3));
            }
        }
      }
      if (d['QuestionID'] === 130) {
        this.tableData[8]['enable'] = true;
        if(this.tableData[8]['value'].length < 6) {
          this.tableData[8]['value'].push(
            {
              'No': this.tableData[8]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[8]['lineChartData'][0]['data'].length < 6) {
            this.chartData[8]['enable'] = true;
            this.chartData[8]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
            if(!(this.chartData[8]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
              this.chartData[8]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
            }else {
              this.chartData[8]['lineChartLabels'].push(name.substring(0, 3));
            }
        }
       }
      if (d['QuestionID'] === 131) {
        this.tableData[9]['enable'] = true;
        if(this.tableData[9]['value'].length < 6) {
          this.tableData[9]['value'].push(
            {
              'No': this.tableData[9]['value'].length + 1,
              'Month': name.substring(0, 3),
              'Perc': (parseInt(d['Score']) / 5) * 100
            }
          )
        }
        if(this.chartData[9]['lineChartData'][0]['data'].length < 6) {
          this.chartData[9]['enable'] = true;
          this.chartData[9]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 100);
          if(!(this.chartData[9]['lineChartLabels'].find(a =>a.includes(d['year'].slice(-2))))) {
            this.chartData[9]['lineChartLabels'].push(name.substring(0, 3)+ "'" + d['year'].slice(-2));
          }else {
            this.chartData[9]['lineChartLabels'].push(name.substring(0, 3));
          }
        }
      }
    });
    // this.chartData = this.chartData.filter((a) => a.enable);
    // this.chartData = this.chartData.slice(0, 6)
    // this.tableData = this.tableData.filter((a) => a.enable);
    // this.tableData = this.tableData.slice(0, 6);
  });

  }

  ngOnInit() {
  }

  goBack()
  {
    this.location.back();
  }

}
