import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61117Page } from './s61117.page';

describe('S61117Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61117Page;
  let fixture: ComponentFixture<S61117Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61117Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61117Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
