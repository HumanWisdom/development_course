import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Injectable({
    providedIn: 'root'
})
export class LogEventService {

    constructor(
        private analytics: AngularFireAnalytics
    ) { }

    logEvent(eventname: string, obj: Object) {
        this.analytics.logEvent(eventname, obj);
    }
}