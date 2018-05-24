import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARoutingModule } from './a-routing.module';

import { AComponent } from './a.component';

@NgModule({
  imports: [
    CommonModule,
    ARoutingModule
  ],
  declarations: [AComponent],
  exports: [AComponent]
})
export class AModule { }
