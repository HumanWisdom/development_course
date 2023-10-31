import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58043Page } from './s58043.page';

describe('S58043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58043Page;
  let fixture: ComponentFixture<S58043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
