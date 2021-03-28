import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productFormGroup?: FormGroup;
  protected submitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      productId: [''],
      productName: [''],
      category: [''],
      location: [''],
      currentQuantity: [''],
      alertQuantity: [''],
      customField1: [''],
      customField: [''],
      createdAt: [],

    })
  }

}
