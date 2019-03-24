import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/">PCV Murecore</button>
            <span style="flex: 1 1 auto"></span>
            <button mat-button routerLink="/">Register</button>
            <button mat-button routerLink="/">Login</button>
        </mat-toolbar>
    `
})
export class NavComponent {
    constructor() {}
}
