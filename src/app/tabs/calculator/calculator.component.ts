import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  output = 0;
  previousInputisOperator = false;
  calculationInput = '';
  openBracket = 0;

  constructor() {}

  ngOnInit(): void {}



  handleNumpadPress(value) {
    this.previousInputisOperator = false;
    this.calculationInput += value;
    console.log('Operand', this.calculationInput);
  }

  handleOperatorPress(value) {
    if (this.calculationInput.length === 0) {
      console.warn('Operator entered before operand');
    } else {
      if (this.previousInputisOperator === true) {
        switch (value) {
          case '/':
          case '*':
          case '+':
          case '-':
          case '%':
            this.calculationInput = this.calculationInput.slice(0, -1) + value;
            break;
          default:
            console.warn('Switch Default', value);
            break;
        }
        console.log('Operator #1', this.calculationInput);
      } else {
        this.calculationInput += value;
        console.log('Operator #2', value);
      }
      this.previousInputisOperator = true;
    }
  }

  brackets() {
    if (this.openBracket < 1) {
      this.calculationInput += '(';
      this.openBracket++;
    } else {
      this.calculationInput += ')';
      this.openBracket--;
    }
  }

  makeValueNegative() {
    this.calculationInput += '(-';
    this.openBracket++;
  }

  clear() {
    this.calculationInput = '';
    this.output = 0;
     console.log(this.output, this.calculationInput);
  }

  Delete() {
    this.calculationInput = this.calculationInput.substring(
      0,
      this.calculationInput.length - 1
    );
  }

  calculate() {
    this.output = eval(this.calculationInput);
    console.log('Output', this.output);
  }
}
