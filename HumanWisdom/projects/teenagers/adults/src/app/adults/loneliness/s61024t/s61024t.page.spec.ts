import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61024tPage } from './s61024t.page';

describe('S61024tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61024tPage;
  let fixture: ComponentFixture<S61024tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61024tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61024tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
