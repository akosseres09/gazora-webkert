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
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import { DialogComponent } from './shared/dialog/dialog/dialog.component';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainGasComponent,
    SidenavComponent,
    ProfileComponent,
    DialogComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(
            {
                "projectId": "gazora-webkert-3ccf4",
                "appId": "1:579222676333:web:7fd65ab5f9982d7330b064",
                "storageBucket": "gazora-webkert-3ccf4.appspot.com",
                "apiKey": "AIzaSyBUiKGuqA8_zUEpYlwDg69G5ct9oZaGnhM",
                "authDomain": "gazora-webkert-3ccf4.firebaseapp.com",
                "messagingSenderId": "579222676333",
                "measurementId": "G-VR72SDVHD5"
            }
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
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
