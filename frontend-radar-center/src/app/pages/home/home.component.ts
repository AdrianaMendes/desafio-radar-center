import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RecordService } from '@services/record.service';
import { ChartConfiguration, ChartData } from 'chart.js';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      title: {
        display: true,
        text: 'Speed in the last 10 minutes'
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
      title: {
        display: true,
        text: 'Vehicle Classification'
      },
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  pieChartData: ChartData<'pie', number[], string | string[]> | null = null;
  averageSpeed: number = 0;
  countTotalRecords: number = 0;
  subscription?: Subscription;
  progress: number = 0;

  constructor(private readonly recordService: RecordService) { }

  ngAfterViewInit(): void {
    this.refresh();
    const source: Observable<number> = interval(10000);
    const timer: Observable<number> = interval(1000);
    this.subscription = source.subscribe(() => this.refresh());
    this.subscription = timer.subscribe(() => {
      this.progress = (this.progress + 10) % 100;
    });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  refresh(): void {
    this.recordService.dashboard().subscribe({
      next: (response) => {
        this.averageSpeed = response.averageSpeed;
        this.countTotalRecords = response.countTotalRecords;

        this.lineChartData = {
          datasets: [
            {
              data: response.averageSpeedLast10Min,
              label: 'Speed',
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
