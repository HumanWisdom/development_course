import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140031Page } from './s140031.page';

describe('S140031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140031Page;
  let fixture: ComponentFixture<S140031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
