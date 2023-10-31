import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46031Page } from './s46031.page';

describe('S46031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46031Page;
  let fixture: ComponentFixture<S46031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
