import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55031Page } from './s55031.page';

describe('S55031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55031Page;
  let fixture: ComponentFixture<S55031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
