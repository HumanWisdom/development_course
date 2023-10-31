import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48026Page } from './s48026.page';

describe('S48026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48026Page;
  let fixture: ComponentFixture<S48026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
