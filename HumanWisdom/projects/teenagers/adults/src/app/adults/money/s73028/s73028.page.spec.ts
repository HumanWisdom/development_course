import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73028Page } from './s73028.page';

describe('S73028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73028Page;
  let fixture: ComponentFixture<S73028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
