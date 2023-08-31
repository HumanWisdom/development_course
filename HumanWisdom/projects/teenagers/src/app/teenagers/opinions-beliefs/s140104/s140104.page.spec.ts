import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140104Page } from './s140104.page';

describe('S140104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140104Page;
  let fixture: ComponentFixture<S140104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
