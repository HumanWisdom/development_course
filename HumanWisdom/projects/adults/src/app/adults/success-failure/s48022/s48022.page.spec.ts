import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48022Page } from './s48022.page';

describe('S48022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48022Page;
  let fixture: ComponentFixture<S48022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
