import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48073tPage } from './s48073t.page';

describe('S48073tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48073tPage;
  let fixture: ComponentFixture<S48073tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48073tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48073tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
