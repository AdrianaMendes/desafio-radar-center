import { DatePipe, DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RecordService } from '@services/record.service';
import { IRecordTable } from '@shared/interfaces';
import { NgxMaskPipe } from 'ngx-mask';

@Component({
  templateUrl: './record.component.html',
})
export class RecordComponent implements AfterViewInit {
  readonly displayedColumns: string[] = ['id', 'licensePlate', 'vehicleClass', 'speed', 'time'];
  dataSource: MatTableDataSource<IRecordTable> = new MatTableDataSource<IRecordTable>([]);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private readonly recordService: RecordService, private readonly ngxMaskPipe: NgxMaskPipe, private readonly decimalPipe: DecimalPipe, private readonly datePipe: DatePipe) { }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<IRecordTable>([]);
    this.recordService.findAll().subscribe({
      next: (response) => {
        this.dataSource.data = response.map(x => {
          const { id, licensePlate, speed, time, vehicleClass } = x;
          return {
            id: id + '',
            licensePlate: this.ngxMaskPipe.transform(licensePlate, 'SSS-9S99'),
            speed: this.decimalPipe.transform(speed, '1.2-2') + 'km/h',
            time: this.datePipe.transform(time, 'dd/MM/yyyy HH:mm:ss'),
            vehicleClass: vehicleClass
          } as IRecordTable;
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  refresh(): void {
    this.ngAfterViewInit();
  }
}
