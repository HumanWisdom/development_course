import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58049Page } from './s58049.page';

describe('S58049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58049Page;
  let fixture: ComponentFixture<S58049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
