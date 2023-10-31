import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73031Page } from './s73031.page';

describe('S73031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73031Page;
  let fixture: ComponentFixture<S73031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
