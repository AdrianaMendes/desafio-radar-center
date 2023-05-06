import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RecordService } from '@services/record.service';
import { IRecord } from '@shared/interfaces';

@Component({
  templateUrl: './record.component.html',
})
export class RecordComponent {
  readonly displayedColumns: string[] = ['id', 'licensePlate', 'vehicleClass', 'speed', 'time'];
  dataSource: MatTableDataSource<IRecord> = new MatTableDataSource<IRecord>([]);

  constructor(private readonly recordService: RecordService) {
    this.recordService.findAll().subscribe({
      next: (response) => {
        this.dataSource.data = response;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
