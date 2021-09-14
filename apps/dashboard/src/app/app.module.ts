import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AstronautsComponent } from './astronauts/astronauts.component';
import { AstronautDetailsComponent } from './astronauts/astronaut-details/astronaut-details.component';
import { AstronautListComponent } from './astronauts/astronaut-list/astronaut-list.component';
import { MaterialModule } from "@astronaut-app/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@astronaut-app/core-data";
import { CoreStateModule } from "@astronaut-app/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@astronaut-app/environment';
import { UiLoginModule } from '@astronaut-app/ui-login';
import { AstronautComponent } from './astronaut/astronaut.component';
import { AstronautInfoComponent } from './astronaut/astronaut-info/astronaut-info.component';

@NgModule({
  declarations: [AppComponent, AstronautsComponent, AstronautDetailsComponent, AstronautListComponent, AstronautInfoComponent, AstronautComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}