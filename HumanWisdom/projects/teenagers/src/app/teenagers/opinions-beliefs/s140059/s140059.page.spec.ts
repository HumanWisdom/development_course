import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140059Page } from './s140059.page';

describe('S140059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140059Page;
  let fixture: ComponentFixture<S140059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
