import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18003Page } from './s18003.page';

describe('S18003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18003Page;
  let fixture: ComponentFixture<S18003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
