import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134183Page } from './s134183.page';

describe('S134183Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134183Page;
  let fixture: ComponentFixture<S134183Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134183Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134183Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
