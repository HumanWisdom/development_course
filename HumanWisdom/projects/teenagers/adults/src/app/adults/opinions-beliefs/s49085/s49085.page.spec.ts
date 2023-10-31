import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49085Page } from './s49085.page';

describe('S49085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49085Page;
  let fixture: ComponentFixture<S49085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
