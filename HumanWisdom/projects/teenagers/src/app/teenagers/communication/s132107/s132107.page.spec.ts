import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132107Page } from './s132107.page';

describe('S132107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132107Page;
  let fixture: ComponentFixture<S132107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
