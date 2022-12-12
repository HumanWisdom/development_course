import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49014Page } from './s49014.page';

describe('S49014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49014Page;
  let fixture: ComponentFixture<S49014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
