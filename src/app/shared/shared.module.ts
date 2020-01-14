import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSeparatorComponent } from './components/content-separator/content-separator.component';



@NgModule({
  declarations: [ContentSeparatorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    //Modules
    CommonModule,

    //Components
    ContentSeparatorComponent

  ]
})
export class SharedModule { }
