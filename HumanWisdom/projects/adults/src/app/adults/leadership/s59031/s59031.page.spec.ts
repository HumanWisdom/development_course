import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59031Page } from './s59031.page';

describe('S59031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59031Page;
  let fixture: ComponentFixture<S59031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
