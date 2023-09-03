import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140107Page } from './s140107.page';

describe('S140107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140107Page;
  let fixture: ComponentFixture<S140107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
