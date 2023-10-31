import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63031Page } from './s63031.page';

describe('S63031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63031Page;
  let fixture: ComponentFixture<S63031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
