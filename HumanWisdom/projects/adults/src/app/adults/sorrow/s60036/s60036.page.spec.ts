import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60036Page } from './s60036.page';

describe('S60036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60036Page;
  let fixture: ComponentFixture<S60036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
