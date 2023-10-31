import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46068Page } from './s46068.page';

describe('S46068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46068Page;
  let fixture: ComponentFixture<S46068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
