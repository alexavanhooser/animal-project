import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule} from './app.routes';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { LoginComponent } from './login/login.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CardComponent } from './card/card.component';
import { MapComponent } from './map/map.component';
import { User } from './models/user';
import { NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmComponent,
    CardComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    ReactiveFormsModule,
    AmChartsModule,

    // Routing modules should be the last thing on the list, otherwise bad things happen
    // these modules are loaded in order
    RoutingModule
  ],
      //Don't forget to add the component to entryComponents section
  entryComponents: [
    ConfirmComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:   [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
