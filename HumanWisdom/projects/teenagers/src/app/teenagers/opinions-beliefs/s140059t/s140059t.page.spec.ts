import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140059tPage } from './s140059t.page';

describe('S140059tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140059tPage;
  let fixture: ComponentFixture<S140059tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140059tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140059tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
