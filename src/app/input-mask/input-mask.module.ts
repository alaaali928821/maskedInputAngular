import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskComponent } from './input-mask.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [
    InputMaskComponent,
  ],
  imports: [
    CommonModule,
    NgxMaskDirective, NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  exports:[InputMaskComponent]

})
export class InputMaskModule { }
