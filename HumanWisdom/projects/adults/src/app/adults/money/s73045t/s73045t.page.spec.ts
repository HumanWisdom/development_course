import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73045tPage } from './s73045t.page';

describe('S73045tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73045tPage;
  let fixture: ComponentFixture<S73045tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73045tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73045tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
