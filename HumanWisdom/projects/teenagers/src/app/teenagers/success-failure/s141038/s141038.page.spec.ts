import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141038Page } from './s141038.page';

describe('S141038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141038Page;
  let fixture: ComponentFixture<S141038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
