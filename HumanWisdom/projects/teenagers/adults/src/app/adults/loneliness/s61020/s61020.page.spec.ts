import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61020Page } from './s61020.page';

describe('S61020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61020Page;
  let fixture: ComponentFixture<S61020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
