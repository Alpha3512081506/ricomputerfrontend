import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryFormGroup?: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.categoryFormGroup = this.fb.group({
      categoryId: [''],
      categoryName: ['']
    })
  }

}
