import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45088Page } from './s45088.page';

describe('S45088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45088Page;
  let fixture: ComponentFixture<S45088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
