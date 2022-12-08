import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45069Page } from './s45069.page';

describe('S45069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45069Page;
  let fixture: ComponentFixture<S45069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
