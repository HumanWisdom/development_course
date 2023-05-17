import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116105Page } from './s116105.page';

describe('S116105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116105Page;
  let fixture: ComponentFixture<S116105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
