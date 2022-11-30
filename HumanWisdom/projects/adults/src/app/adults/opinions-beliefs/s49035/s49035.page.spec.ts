import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49035Page } from './s49035.page';

describe('S49035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49035Page;
  let fixture: ComponentFixture<S49035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
