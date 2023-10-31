import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46011tPage } from './s46011t.page';

describe('S46011tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46011tPage;
  let fixture: ComponentFixture<S46011tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46011tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46011tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
