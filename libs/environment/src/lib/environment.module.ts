import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ASTRO_ENVIRONMENT } from './astros.token';
import { AstroEnvironment } from "./astros.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: AstroEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: ASTRO_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
