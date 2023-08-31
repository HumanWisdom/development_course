import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140097Page } from './s140097.page';

describe('S140097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140097Page;
  let fixture: ComponentFixture<S140097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
