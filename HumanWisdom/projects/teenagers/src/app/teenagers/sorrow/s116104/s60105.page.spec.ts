import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60105Page } from './s60105.page';

describe('S60105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60105Page;
  let fixture: ComponentFixture<S60105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
