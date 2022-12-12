import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18068Page } from './s18068.page';

describe('S18068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18068Page;
  let fixture: ComponentFixture<S18068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
