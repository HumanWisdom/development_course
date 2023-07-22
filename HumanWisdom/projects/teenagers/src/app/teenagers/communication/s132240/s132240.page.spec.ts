import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132240Page } from './s132240.page';

describe('S132240Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132240Page;
  let fixture: ComponentFixture<S132240Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132240Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132240Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
