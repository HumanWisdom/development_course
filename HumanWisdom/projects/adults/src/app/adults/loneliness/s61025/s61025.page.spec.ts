import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61025Page } from './s61025.page';

describe('S61025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61025Page;
  let fixture: ComponentFixture<S61025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
