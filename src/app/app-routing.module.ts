import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './tabs/calculator/calculator.component';
import { ConverterComponent } from './tabs/converter/converter.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'calculator', component: CalculatorComponent },
      { path: 'converter', component: ConverterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
