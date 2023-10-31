import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48019tPage } from './s48019t.page';

describe('S48019tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48019tPage;
  let fixture: ComponentFixture<S48019tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48019tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48019tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
