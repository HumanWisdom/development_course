import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49020Page } from './s49020.page';

describe('S49020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49020Page;
  let fixture: ComponentFixture<S49020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
