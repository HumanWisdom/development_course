import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48001Page } from './s48001.page';

describe('S48001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48001Page;
  let fixture: ComponentFixture<S48001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
