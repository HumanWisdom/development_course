import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45147Page } from './s45147.page';

describe('S45147Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45147Page;
  let fixture: ComponentFixture<S45147Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45147Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45147Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
