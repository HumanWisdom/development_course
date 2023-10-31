import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46057Page } from './s46057.page';

describe('S46057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46057Page;
  let fixture: ComponentFixture<S46057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
