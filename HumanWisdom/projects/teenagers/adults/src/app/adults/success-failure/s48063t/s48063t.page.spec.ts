import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48063tPage } from './s48063t.page';

describe('S48063tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48063tPage;
  let fixture: ComponentFixture<S48063tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48063tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48063tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
