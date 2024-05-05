import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
    @Input() user?: firebase.default.User | null;
    @Output() onSidenavClose: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onLogout: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {}

    close(logout?: boolean) {
        this.onSidenavClose.emit(true);
        if (logout) {
            this.onLogout.emit();
        }
    }
}
