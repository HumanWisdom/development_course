import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46007Page } from './s46007.page';

describe('S46007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46007Page;
  let fixture: ComponentFixture<S46007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
