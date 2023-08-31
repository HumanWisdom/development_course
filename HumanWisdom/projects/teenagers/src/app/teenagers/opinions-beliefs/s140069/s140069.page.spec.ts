import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140069Page } from './s140069.page';

describe('S140069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140069Page;
  let fixture: ComponentFixture<S140069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
