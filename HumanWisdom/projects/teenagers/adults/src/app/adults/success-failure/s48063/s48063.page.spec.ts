import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48063Page } from './s48063.page';

describe('S48063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48063Page;
  let fixture: ComponentFixture<S48063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
