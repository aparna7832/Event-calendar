import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventCalendarService {

  constructor(private http: HttpClient) { }
  
//Http get method to call the api to get event details
  getEvents(): Observable<any[]> {
    return this.http.get<any[]>('https://timelyapp.time.ly/api/calendars/4243455/events').pipe(
      tap(events => console.log(events)),
      pluck('data', 'items')
    );
  }
} 
