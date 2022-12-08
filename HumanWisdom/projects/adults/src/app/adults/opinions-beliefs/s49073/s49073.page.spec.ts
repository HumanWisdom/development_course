import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49073Page } from './s49073.page';

describe('S49073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49073Page;
  let fixture: ComponentFixture<S49073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
