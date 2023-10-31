import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46072Page } from './s46072.page';

describe('S46072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46072Page;
  let fixture: ComponentFixture<S46072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
