import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49092Page } from './s49092.page';

describe('S49092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49092Page;
  let fixture: ComponentFixture<S49092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
