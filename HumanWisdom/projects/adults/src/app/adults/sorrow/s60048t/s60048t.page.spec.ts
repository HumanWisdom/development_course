import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60048tPage } from './s60048t.page';

describe('S60048tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60048tPage;
  let fixture: ComponentFixture<S60048tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60048tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60048tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
