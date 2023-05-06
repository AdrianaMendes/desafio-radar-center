import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@shared/environment';
import { IDashboard, IRecord, IRecordCreateDto } from '@shared/interfaces';


@Injectable({
	providedIn: 'root',
})
export class RecordService {
	private readonly url: string = `${environment.base_url}/records`;

	constructor(private readonly httpClient: HttpClient) {}

	delete(id: number): Observable<void> {
		return this.httpClient.delete<void>(`${this.url}/delete/${id}`);
	}

	findAll(): Observable<IRecord[]> {
		return this.httpClient.get<IRecord[]>(`${this.url}/findAll`);
	}

    findById(id: number): Observable<IRecord> {
		return this.httpClient.get<IRecord>(`${this.url}/findById/${id}`);
	}

	dashboard(id: number): Observable<IDashboard> {
		return this.httpClient.get<IDashboard>(`${this.url}/dashboard`);
	}

    findByLicensePlate(licensePlate: string): Observable<IRecord[]> {
		return this.httpClient.get<IRecord[]>(`${this.url}/findByLicensePlate/${licensePlate}`);
	}

	save(dto: IRecordCreateDto): Observable<IRecord> {
		return this.httpClient.post<IRecord>(`${this.url}/save`, dto);
	}
}