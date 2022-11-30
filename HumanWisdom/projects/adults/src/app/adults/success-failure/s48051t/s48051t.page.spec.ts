import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48051tPage } from './s48051t.page';

describe('S48051tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48051tPage;
  let fixture: ComponentFixture<S48051tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48051tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48051tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
