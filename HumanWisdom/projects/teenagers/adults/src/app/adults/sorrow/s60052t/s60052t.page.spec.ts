import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60052tPage } from './s60052t.page';

describe('S60052tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60052tPage;
  let fixture: ComponentFixture<S60052tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60052tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60052tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
