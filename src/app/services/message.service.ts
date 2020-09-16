import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //TypeScript supports generics
  private shareMessage:BehaviorSubject<String> = new BehaviorSubject(null);

  constructor() { 
  }

  getObserable(): Observable<String> {
    //This returns Observable on Subject
    return this.shareMessage.asObservable();
 }


  updateMessage(message: string) {
    //Basically writting the data on subject
    this.shareMessage.next(message);
  }
}
