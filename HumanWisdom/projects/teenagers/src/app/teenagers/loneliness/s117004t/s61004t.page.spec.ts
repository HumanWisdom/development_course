import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61004tPage } from './s61004t.page';

describe('S61004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61004tPage;
  let fixture: ComponentFixture<S61004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
