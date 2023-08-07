import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134169tPage } from './s134169t.page';

describe('S134169tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134169tPage;
  let fixture: ComponentFixture<S134169tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134169tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134169tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
