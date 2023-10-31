import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45140Page } from './s45140.page';

describe('S45140Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45140Page;
  let fixture: ComponentFixture<S45140Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45140Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45140Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
