import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const imports = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: imports,
  exports: imports
})
export class AngularMaterialModule {}
