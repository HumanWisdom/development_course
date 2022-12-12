import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49053Page } from './s49053.page';

describe('S49053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49053Page;
  let fixture: ComponentFixture<S49053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
