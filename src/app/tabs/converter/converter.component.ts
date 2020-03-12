import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  conversionType = new FormControl('Area');

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

  constructor() {
    this.conversionType.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnInit(): void {}
}
