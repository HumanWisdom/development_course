import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45050Page } from './s45050.page';

describe('S45050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45050Page;
  let fixture: ComponentFixture<S45050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
