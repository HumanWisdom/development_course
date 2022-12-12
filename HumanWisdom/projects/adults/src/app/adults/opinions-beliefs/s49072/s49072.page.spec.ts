import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49072Page } from './s49072.page';

describe('S49072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49072Page;
  let fixture: ComponentFixture<S49072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
