import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60090Page } from './s60090.page';

describe('S60090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60090Page;
  let fixture: ComponentFixture<S60090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
