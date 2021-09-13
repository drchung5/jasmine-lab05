import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  calculate(a: number, b: number, op: string) {
    switch(op) {
      case 'add':
          return a+b
      case 'sub':
          return a-b
      case 'mult':
          return a*b
      case 'div':
           return a/b
      default:
           throw Error("not implemented") 
    }
  }

  // calculate(a: number, b: number, op: string) :number {
  //   throw new Error("not implemented") 
  // }

}
