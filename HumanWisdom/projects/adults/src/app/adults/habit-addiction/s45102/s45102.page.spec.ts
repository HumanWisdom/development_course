import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45102Page } from './s45102.page';

describe('S45102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45102Page;
  let fixture: ComponentFixture<S45102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
