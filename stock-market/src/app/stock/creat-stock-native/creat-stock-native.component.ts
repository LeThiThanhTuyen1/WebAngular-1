import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creat-stock-native',
  templateUrl: './creat-stock-native.component.html',
  styleUrl: './creat-stock-native.component.css'
})

export class CreatStockNativeComponent {
  // public nameControl = new FormControl();


  public stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  get name() { return this.stockForm.get('name'); }
  get code() { return this.stockForm.get('code'); }
  get price() { return this.stockForm.get('price'); }

  constructor() {}

  onSubmit() {
    console.log('Stock Form Value', this.stockForm.value);
  }
}
