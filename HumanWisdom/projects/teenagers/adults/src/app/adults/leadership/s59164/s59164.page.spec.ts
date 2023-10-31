import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59164Page } from './s59164.page';

describe('S59164Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59164Page;
  let fixture: ComponentFixture<S59164Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59164Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59164Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
