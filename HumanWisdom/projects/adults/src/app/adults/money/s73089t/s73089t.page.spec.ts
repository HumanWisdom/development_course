import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73089tPage } from './s73089t.page';

describe('S73089tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73089tPage;
  let fixture: ComponentFixture<S73089tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73089tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73089tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
