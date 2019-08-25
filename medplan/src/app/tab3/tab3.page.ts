import { Component } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public pieChart: GoogleChartInterface;

  constructor() {
    
  }  

  ionViewDidEnter() {
    this.loadSimplePieChart();
  }

  loadSimplePieChart() {

    this.pieChart = {
      chartType: 'PieChart',
      dataTable: [
        
      ],
      //opt_firstRowIsData: true,
      options: {
        'title': 'Tasks',
        height: 600,
        width: '100%'
      },
    };
  }
}
