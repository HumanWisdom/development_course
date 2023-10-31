import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60004tPage } from './s60004t.page';

describe('S60004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60004tPage;
  let fixture: ComponentFixture<S60004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
