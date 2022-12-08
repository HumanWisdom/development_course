import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48105Page } from './s48105.page';

describe('S48105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48105Page;
  let fixture: ComponentFixture<S48105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
