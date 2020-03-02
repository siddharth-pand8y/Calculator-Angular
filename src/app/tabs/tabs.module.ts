import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { ConverterComponent } from './converter/converter.component';



@NgModule({
  declarations: [CalculatorComponent, ConverterComponent],
  imports: [
    CommonModule
  ]
})
export class TabsModule { }
