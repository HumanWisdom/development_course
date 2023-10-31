import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46022Page } from './s46022.page';

describe('S46022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46022Page;
  let fixture: ComponentFixture<S46022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
