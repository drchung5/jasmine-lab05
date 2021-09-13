import { Component } from '@angular/core';
import { OnInit } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArithmeticService } from './arithmetic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private arithmetic: ArithmeticService) {}

  myForm: FormGroup
  result: number 

  ngOnInit() {
    this.myForm = new FormGroup({
      a: new FormControl('', [Validators.required]),
      b: new FormControl('', [Validators.required]),
      operation: new FormControl('', [Validators.required])
    })
    this.myForm.patchValue({operation: 'add', tc: true})
  }

  doCalculate() {
    let a = this.myForm.controls['a'].value
    let b = this.myForm.controls['b'].value
    let operation = this.myForm.controls['operation'].value
    console.log(`a: ${a}  b: ${b}  operation: ${operation}`) 
    this.result = this.arithmetic.calculate(a,b,operation) 
  }

}
