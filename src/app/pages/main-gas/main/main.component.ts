import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AddressService} from "../../../shared/services/address/address.service";
import { Address } from "../../../shared/models/Address";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
    address?: Address;

    form = new FormGroup({
        country: new FormControl(''),
        state: new FormControl(''),
        city: new FormControl(''),
        street: new FormControl(''),
        houseNumber: new FormControl(''),
    });

    constructor(private adService: AddressService) {
    }

    ngOnInit() {
    }

    submit() {
        this.address = {
            uid: localStorage.getItem('user') as string,
            country: this.form.get('country')?.value as string,
            state: this.form.get('state')?.value as string,
            city: this.form.get('city')?.value as string,
            street: this.form.get('street')?.value as string,
            houseNumber: this.form.get('houseNumber')?.value as string
        };
        this.adService.create(this.address);
    }
}
