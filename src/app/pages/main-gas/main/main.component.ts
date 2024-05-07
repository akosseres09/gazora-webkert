import {Component, OnInit} from '@angular/core';
import {AddressService} from "../../../shared/services/address/address.service";
import { Address } from "../../../shared/models/Address";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
    address?: Address;

    constructor() {
    }

    ngOnInit() {
    }
}
