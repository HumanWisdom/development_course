import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49016Page } from './s49016.page';

describe('S49016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49016Page;
  let fixture: ComponentFixture<S49016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
