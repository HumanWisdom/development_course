import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48009Page } from './s48009.page';

describe('S48009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48009Page;
  let fixture: ComponentFixture<S48009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
