import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55041Page } from './s55041.page';

describe('S55041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55041Page;
  let fixture: ComponentFixture<S55041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
