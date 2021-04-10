import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-magic-numbers',
  templateUrl: './magic-numbers.component.html',
  styleUrls: ['./magic-numbers.component.scss']
})
export class MagicNumbersComponent implements OnInit {
  magicNumber : number;
  magicalForm : FormGroup
  magicalArrayList : any[]  = [];
  constructor(private formBuilder  : FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.magicNumber = this.magicalForm.controls['magicalNumber'].value;
  }

  initForm()
  {
    this.magicalForm = this.formBuilder.group({
      range1 : '',
      range2 : '',
      magicalNumber : ['' , [Validators.pattern('[1-9]')]]
    })
  }

  calculateMagicNumbers(n : number)
  {
    if(this.calculateSumOfMagicNumbers(n) === parseInt(this.magicalForm.controls['magicalNumber'].value) )
    {
      if(this.containsMagicNumbers(n))
      {
        return true 
      }
      return false;
    }
    return false;
  }

  calculateSumOfMagicNumbers(n : number)
  {
    var arr = this.splitMagicNumbers(n);
    var sum = 0;
    for(const i of arr)
    {
      sum += parseInt(i);
    }
    if(sum >= 10)
    {
      return this.calculateSumOfMagicNumbers(sum);
    }
    return sum;
  }

  splitMagicNumbers(n:number)
  {
    return  n.toString().split('');
  }

  containsMagicNumbers(n : number)
  {
    var arr = this.splitMagicNumbers(n);
    if(arr.indexOf(this.magicalForm.controls['magicalNumber'].value) != -1)
    {
      return true;
    }  
    return false
  }

  populateArrays()
  {
    this.magicalArrayList = [];
    var range1  = this.magicalForm.controls['range1'].value;
    var range2  = this.magicalForm.controls['range2'].value;

    while(range1 != range2)
    {
      if(this.calculateMagicNumbers(range1))
      {
        this.magicalArrayList.push(range1);
      }
      range1 ++;
    }

  }











}
