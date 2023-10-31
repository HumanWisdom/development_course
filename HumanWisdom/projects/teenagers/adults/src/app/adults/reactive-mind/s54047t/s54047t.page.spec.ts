import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S54047tPage } from './s54047t.page';

describe('S54047tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54047tPage;
  let fixture: ComponentFixture<S54047tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54047tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54047tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
