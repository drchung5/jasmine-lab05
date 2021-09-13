import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ArithmeticService } from './arithmetic.service';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [ArithmeticService] // allows the service to be injected
    }).compileComponents();

  });

  it('should add 2 + 2', ()=> {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.componentInstance;

    app.ngOnInit() // creates the form group
    app.myForm.controls['a'].setValue(2)
    app.myForm.controls['b'].setValue(2)
    app.myForm.controls['operation'].setValue("add")
    
    // spyOn(app, "doCalculate").and.callFake( () => app.result = 4 )
    app.doCalculate()
    
    expect(app.result).toEqual(4)
  })

  it('should multiply 2 X 3', ()=> {
    let service = new ArithmeticService()
    let app = new AppComponent(service)
    
    app.ngOnInit() // creates the form group
    app.myForm.controls['a'].setValue(2)
    app.myForm.controls['b'].setValue(3)
    app.myForm.controls['operation'].setValue("mult")
    
    // spyOn(service, "calculate").and.returnValue(6)

    app.doCalculate()
    
    expect(app.result).toEqual(6)
  })

});
