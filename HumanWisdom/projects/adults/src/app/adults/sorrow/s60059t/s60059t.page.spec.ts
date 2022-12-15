import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60059tPage } from './s60059t.page';

describe('S60059tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60059tPage;
  let fixture: ComponentFixture<S60059tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60059tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60059tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
