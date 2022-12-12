import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53240Page } from './s53240.page';

describe('S53240Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53240Page;
  let fixture: ComponentFixture<S53240Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53240Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53240Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
