import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134182Page } from './s134182.page';

describe('S134182Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134182Page;
  let fixture: ComponentFixture<S134182Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134182Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134182Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
