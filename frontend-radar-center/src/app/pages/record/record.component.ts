import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RecordService } from '@services/record.service';
import { IRecord } from '@shared/interfaces';

@Component({
  templateUrl: './record.component.html',
})
export class RecordComponent implements AfterViewInit {
  readonly displayedColumns: string[] = ['id', 'licensePlate', 'vehicleClass', 'speed', 'time'];
  dataSource: MatTableDataSource<IRecord> = new MatTableDataSource<IRecord>([]);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private readonly recordService: RecordService) {
  }
  
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<IRecord>([]);
    this.recordService.findAll().subscribe({
      next: (response) => {
        this.dataSource.data = response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
