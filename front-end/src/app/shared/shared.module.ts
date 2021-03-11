import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { PayloadComponent } from './components/payload/payload.component';



@NgModule({
  declarations: [HeaderComponent, PayloadComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule
  ],
  exports: [
    HeaderComponent,
    PayloadComponent
  ]
})
export class SharedModule { }
