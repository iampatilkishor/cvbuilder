import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Education } from '../model/education';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // let educationsSubject = new BehaviorSubject<Education>(new Education());
  // let education = educationsSubject.asObservable();

}
