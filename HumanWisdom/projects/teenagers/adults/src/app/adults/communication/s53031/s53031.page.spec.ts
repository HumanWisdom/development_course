import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53031Page } from './s53031.page';

describe('S53031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53031Page;
  let fixture: ComponentFixture<S53031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
