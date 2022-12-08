import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49094Page } from './s49094.page';

describe('S49094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49094Page;
  let fixture: ComponentFixture<S49094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
