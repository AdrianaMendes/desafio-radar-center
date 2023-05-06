import { AfterViewInit, Component } from '@angular/core';
import { RecordService } from '@services/record.service';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      title: {
        display: true,
        text: 'Velocidade nos últimos 10 minutos'
      },
    },
    scales: {
      x: {
        title: { display: true, text: 'min' },
        ticks: {
          stepSize: 1
        }
      },
      y: {
        title: { display: true, text: 'km/h' },
        min: 80,
        max: 100,
        ticks: {
          stepSize: 5
        }
      },
    }
  };
  lineChartData: ChartConfiguration['data'] | null = null;

  // Pie
  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  pieChartData: ChartData<'pie', number[], string | string[]> | null = null;
  averageSpeed: number = 0;
  countTotalRecords: number = 0;

  constructor(private readonly recordService: RecordService) { }

  ngAfterViewInit(): void {
    this.recordService.dashboard().subscribe({
      next: (response) => {
        this.averageSpeed = response.averageSpeed;
        this.countTotalRecords = response.countTotalRecords;

        this.lineChartData = {
          datasets: [
            {
              data: response.averageSpeedLast10Min,
              label: 'Velocidade',
              fill: 'origin'
            }
          ],
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        };

        this.pieChartData = {
          labels: response.countVehicleClass.map(x => x.vehicleClass),
          datasets: [{
            data: response.countVehicleClass.map(x => x.count)
          }]
        };
      }
    });
  }
}
