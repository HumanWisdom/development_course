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
      lineChartLabels: []
    },
    {
      lineChartData: [{ data: [], label: 'Stress' }],
      lineChartLabels: []
    },
    {
      lineChartData: [{ data: [], label: 'Control over Emotion' }],
      lineChartLabels: []
    },
    {
      lineChartData: [{ data: [], label: 'Calmness' }],
      lineChartLabels: []
    },
    {
      lineChartData: [{ data: [], label: 'Self-confidence' }],
      lineChartLabels: []
    },
    {
      lineChartData: [{ data: [], label: 'Conflict in relationships' }],
      lineChartLabels: []
    },
    {
      lineChartData: [{ data: [], label: 'Struggle with addictions' }],
      lineChartLabels: []
    },
    {
      lineChartData: [{ data: [], label: 'Coping with criticism' }],
      lineChartLabels: []
    },
    {
      lineChartData: [{ data: [], label: 'Campassion' }],
      lineChartLabels: []
    },
    {
      lineChartData: [{ data: [], label: 'Happiness' }],
      lineChartLabels: []
    },
  ]
  tableData = [
  {
    label: 'Anxiety',
    value: []
  },
  {
    label: 'Stress',
    value: []
  },
  {
    label: 'Control over Emotion',
    value: []
  },
  {
    label: 'Calmness',
    value: []
  },
  {
    label: 'Self-confidence',
    value: []
  },
  {
    label: 'Conflict in relationships',
    value: []
  },
  {
    label: 'Struggle with addictions',
    value: []
  },
  {
    label: 'Coping with criticism',
    value: []
  },
  {
    label: 'Campassion',
    value: []
  },
  {
    label: 'Happiness',
    value: []
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
    r.forEach((d) => {
      let name = monthNames[d['month'] - 1];

      if (d['QuestionID'] === 122) {
        this.tableData[0]['value'].push(
          {
            'No': this.tableData[0]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[0]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[0]['lineChartLabels'].push(name.substring(0, 3));
      }
      if (d['QuestionID'] === 123) {
        this.tableData[1]['value'].push(
          {
            'No': this.tableData[1]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[1]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[1]['lineChartLabels'].push(name.substring(0, 3));
      }
      if (d['QuestionID'] === 124) {
        this.tableData[2]['value'].push(
          {
            'No': this.tableData[2]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[2]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[2]['lineChartLabels'].push(name.substring(0, 3));
      }
      if (d['QuestionID'] === 125) {
        this.tableData[3]['value'].push(
          {
            'No': this.tableData[3]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[3]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[3]['lineChartLabels'].push(name.substring(0, 3));
      }
      if (d['QuestionID'] === 126) {
        this.tableData[4]['value'].push(
          {
            'No': this.tableData[4]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[4]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[4]['lineChartLabels'].push(name.substring(0, 3));
      }
      if (d['QuestionID'] === 127) {
        this.tableData[5]['value'].push(
          {
            'No': this.tableData[5]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[5]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[5]['lineChartLabels'].push(name.substring(0, 3));
      }
      if (d['QuestionID'] === 128) {
        this.tableData[6]['value'].push(
          {
            'No': this.tableData[6]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[6]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[6]['lineChartLabels'].push(name.substring(0, 3));
      }
      if (d['QuestionID'] === 129) {
        this.tableData[7]['value'].push(
          {
            'No': this.tableData[7]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[7]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[7]['lineChartLabels'].push(name.substring(0, 3));
      }
      if (d['QuestionID'] === 130) {
        this.tableData[8]['value'].push(
          {
            'No': this.tableData[8]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[8]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[8]['lineChartLabels'].push(name.substring(0, 3));
      }
      if (d['QuestionID'] === 131) {
        this.tableData[9]['value'].push(
          {
            'No': this.tableData[9]['value'].length + 1,
            'Month': name.substring(0, 3),
            'Perc': (parseInt(d['Score']) / 5) * 10
          }
        )
        this.chartData[9]['lineChartData'][0]['data'].push((parseInt(d['Score']) / 5) * 10);
        this.chartData[9]['lineChartLabels'].push(name.substring(0, 3));
      }
    });
  });

  }

  ngOnInit() {
  }

  goBack()
  {
    this.location.back();
  }

}
