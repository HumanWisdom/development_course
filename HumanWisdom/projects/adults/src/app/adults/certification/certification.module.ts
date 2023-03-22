import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../../shared/shared.module';
import { CertificationRoutingModule } from './certification-routing.module';
import { CertificationComponent } from './certification.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CertificationRoutingModule,
    SharedModule,
    PlatformModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CertificationComponent]
})
export class CertificationModule { }
