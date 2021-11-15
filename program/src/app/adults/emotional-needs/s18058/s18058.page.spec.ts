import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18058Page } from './s18058.page';

describe('S18058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18058Page;
  let fixture: ComponentFixture<S18058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
