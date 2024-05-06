import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-gas',
  templateUrl: './main-gas.component.html',
  styleUrl: './main-gas.component.css'
})
export class MainGasComponent implements OnInit{
    loading: boolean = false;

    ngOnInit() {
        this.loading = true;
    }
}
