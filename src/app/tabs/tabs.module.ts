import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { ConverterComponent } from './converter/converter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [CalculatorComponent, ConverterComponent],
  imports: [
    AppModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TabsModule { }
