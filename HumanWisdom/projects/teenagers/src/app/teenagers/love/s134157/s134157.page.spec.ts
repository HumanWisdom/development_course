import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134157Page } from './s134157.page';

describe('S134157Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134157Page;
  let fixture: ComponentFixture<S134157Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134157Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134157Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
