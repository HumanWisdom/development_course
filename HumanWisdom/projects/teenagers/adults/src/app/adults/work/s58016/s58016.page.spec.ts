import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58016Page } from './s58016.page';

describe('S58016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58016Page;
  let fixture: ComponentFixture<S58016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
