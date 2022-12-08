import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59028Page } from './s59028.page';

describe('S59028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59028Page;
  let fixture: ComponentFixture<S59028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
