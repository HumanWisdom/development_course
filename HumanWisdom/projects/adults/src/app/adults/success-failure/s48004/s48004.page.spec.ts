import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48004Page } from './s48004.page';

describe('S48004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48004Page;
  let fixture: ComponentFixture<S48004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
