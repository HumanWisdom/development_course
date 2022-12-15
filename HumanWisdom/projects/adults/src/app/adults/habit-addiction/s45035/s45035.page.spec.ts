import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45035Page } from './s45035.page';

describe('S45035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45035Page;
  let fixture: ComponentFixture<S45035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
