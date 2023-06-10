import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Ticket } from '../../domain/ticket';
import { TicketService } from '../../services/ticket-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions: any;
  ticket: Ticket[] | any;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTicketsMini().then((data) => {
      this.ticket = data;
    });

    Highcharts.setOptions({
      lang: {
        thousandsSep: ',',
      },
    });
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: ['To Do', 'In Progress', 'Resolved', 'Reopened'],
      },
      yAxis: {
        title: {
          text: 'Ticket Volume',
        },
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: false,
          },
        },
      },
      tooltip: {
        valuePrefix: '',
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Selection 1',
          color: '#00c19d',
          data: [1, 15, 3, 40],
        },
        {
          name: 'Selection 2',
          color: '#a2a9a9',
          data: [2, 90, 4, 65],
        },
      ],
    };
  }
}
