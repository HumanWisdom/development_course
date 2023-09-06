import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140046Page } from './s140046.page';

describe('S140046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140046Page;
  let fixture: ComponentFixture<S140046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
