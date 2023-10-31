import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18036Page } from './s18036.page';

describe('S18036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18036Page;
  let fixture: ComponentFixture<S18036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
