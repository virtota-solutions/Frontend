import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages">
            <mat-card style="margin:10px">
                <mat-card-title>{{message.owner}}</mat-card-title>
                <mat-card-content>{{message.text}}</mat-card-content>
            </mat-card>
        </div>
        `
})
export class MessagesComponent {
    constructor(private webService: WebService) {}
    messages = [{owner: 'Tim', text: 'New Contract to be approved'}, {owner: 'Stan Lee', text: 'Completed request'}];
}
