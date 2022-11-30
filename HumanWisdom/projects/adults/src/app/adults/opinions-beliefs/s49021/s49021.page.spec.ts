import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49021Page } from './s49021.page';

describe('S49021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49021Page;
  let fixture: ComponentFixture<S49021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
