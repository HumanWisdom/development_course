import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73068Page } from './s73068.page';

describe('S73068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73068Page;
  let fixture: ComponentFixture<S73068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
