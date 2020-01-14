import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    LayoutComponent, HeaderComponent, FooterComponent
  ]
})
export class LayoutModule { }
