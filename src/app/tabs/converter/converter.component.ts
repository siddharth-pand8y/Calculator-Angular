import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  conversionType = new FormControl('Area');

  convertInputsForm = this.fb.group({
    input1: [null, Validators.required],
    input2: [null, Validators.required],
    firstSelect: ['Square Centimetre'],
    secondSelect: ['Hectare']
  });

  firstInputActive = true;

  units = {
    area: [
      {
        name: 'Square Centimetre',
        symbol: 'cm\u00B2',
        base_unit: 0.0001
      },
      {
        name: 'Hectare',
        symbol: 'ha',
        base_unit: 10000
      },
      {
        name: 'Square Kilometre',
        symbol: 'km\u00B2',
        base_unit: 1000000
      },
      {
        name: 'Square Metres',
        symbol: 'm\u00B2',
        base_unit: 1
      }
    ],
    volume: [
      {
        name: 'Cubic Metre',
        symbol: 'm\u00B3',
        base_unit: 1
      },
      {
        name: 'Cubic Centimetre',
        symbol: 'cm\u00B3',
        base_unit: 0.000001
      }
    ],
    length: [
      {
        name: 'Kilometre',
        symbol: 'km',
        base_unit: 1000
      },
      {
        name: 'Centimetre',
        symbol: 'cm',
        base_unit: 0.01
      },
      {
        name: 'Millimetre',
        symbol: 'mm',
        base_unit: 0.000001
      },
      {
        name: 'Nanometre',
        symbol: 'nm',
        base_unit: 0.000000001
      },
      {
        name: 'Metre',
        symbol: 'm',
        base_unit: 1
      }
    ]
  };

  constructor(private fb: FormBuilder) {
    this.conversionType.valueChanges.subscribe(value => {
      this.convertInputsForm.patchValue({
        firstSelect: this.units[value.toLowerCase()][0].name,
        secondSelect: this.units[value.toLowerCase()][1].name
      });
    });
  }

  performConversion() {
    const base1 = this.units[this.conversionType.value.toLowerCase()].filter(
      a => a.name === this.convertInputsForm.get('firstSelect').value
    )[0].base_unit;
    const base2 = this.units[this.conversionType.value.toLowerCase()].filter(
      a => a.name === this.convertInputsForm.get('secondSelect').value
    )[0].base_unit;

    if (this.firstInputActive === true) {
      const value = this.convertInputsForm.get('input1').value;

      this.convertInputsForm.patchValue({
        input2: (value * base1) / base2
      });
    } else {
      const value = this.convertInputsForm.get('input2').value;

      this.convertInputsForm.patchValue({
        input1: (value * base2) / base1
      });
    }
  }

  ngOnInit(): void {}
}
