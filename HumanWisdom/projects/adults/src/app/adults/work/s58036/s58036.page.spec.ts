import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58036Page } from './s58036.page';

describe('S58036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58036Page;
  let fixture: ComponentFixture<S58036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
