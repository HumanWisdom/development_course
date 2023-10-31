import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73104Page } from './s73104.page';

describe('S73104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73104Page;
  let fixture: ComponentFixture<S73104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
