import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61105Page } from './s61105.page';

describe('S61105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61105Page;
  let fixture: ComponentFixture<S61105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
