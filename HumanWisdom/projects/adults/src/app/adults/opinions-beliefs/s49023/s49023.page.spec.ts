import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49023Page } from './s49023.page';

describe('S49023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49023Page;
  let fixture: ComponentFixture<S49023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
