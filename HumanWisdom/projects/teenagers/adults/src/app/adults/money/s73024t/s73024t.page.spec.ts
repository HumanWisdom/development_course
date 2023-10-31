import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73024tPage } from './s73024t.page';

describe('S73024tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73024tPage;
  let fixture: ComponentFixture<S73024tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73024tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73024tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
