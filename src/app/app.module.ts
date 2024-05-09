import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { AngularFireModule } from "@angular/fire/compat";
import { MainGasComponent } from './pages/main-gas/main-gas.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ProfileComponent } from './pages/main-gas/profile/profile.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContainer,
    MatDialogContent,
    MatDialogTitle
} from "@angular/material/dialog";
import { DialogComponent } from './shared/dialog/user-dialog/dialog.component';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddSheetComponent } from './shared/sheet/add-sheet/add-sheet.component';
import { MatLine, MatOption } from "@angular/material/core";
import { MeterDialogComponent } from './shared/dialog/meter-dialog/meter-dialog.component';
import { MatSelect } from "@angular/material/select";
import { AddressDialogComponent } from './shared/dialog/address-dialog/address-dialog.component';
import { environment } from "../environments/environment";
import { MainGasModule } from "./pages/main-gas/main-gas.module";
import { BillingDialogComponent } from './shared/dialog/billing-dialog/billing-dialog.component';
import {MatSlideToggle} from "@angular/material/slide-toggle";

@NgModule({
    declarations: [
        AppComponent,
        MainGasComponent,
        SidenavComponent,
        ProfileComponent,
        DialogComponent,
        AddSheetComponent,
        MeterDialogComponent,
        AddressDialogComponent,
        BillingDialogComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(
            environment.firebase
        ),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDialogTitle,
        MatDialogContent,
        MatLabel,
        MatFormField,
        MatDialogActions,
        MatDialogClose,
        MatInput,
        FormsModule,
        ReactiveFormsModule,
        MatLine,
        MatOption,
        MatSelect,
        MainGasModule,
        MatSlideToggle,
        MatDialogContainer,
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
