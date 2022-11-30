import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60075tPage } from './s60075t.page';

describe('S60075tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60075tPage;
  let fixture: ComponentFixture<S60075tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60075tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60075tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
