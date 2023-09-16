import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141090Page } from './s141090.page';

describe('S141090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141090Page;
  let fixture: ComponentFixture<S141090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
