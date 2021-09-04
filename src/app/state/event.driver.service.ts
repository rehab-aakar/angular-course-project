import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEvent } from "./product.state";

@Injectable({providedIn : "root"})
export class EventDriverService{
    SourceEventSubject : Subject<ActionEvent> = new Subject()
    SourceEventSubjectObservable =this.SourceEventSubject.asObservable()

    publishEvent(event:ActionEvent){
        this.SourceEventSubject.next(event)
    }
}