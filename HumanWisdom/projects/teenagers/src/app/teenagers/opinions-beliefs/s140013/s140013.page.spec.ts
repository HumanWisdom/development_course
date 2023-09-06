import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140013Page } from './s140013.page';

describe('S140013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140013Page;
  let fixture: ComponentFixture<S140013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
