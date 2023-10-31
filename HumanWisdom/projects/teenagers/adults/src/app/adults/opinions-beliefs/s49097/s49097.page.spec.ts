import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49097Page } from './s49097.page';

describe('S49097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49097Page;
  let fixture: ComponentFixture<S49097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
