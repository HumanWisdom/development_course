import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134166Page } from './s134166.page';

describe('S134166Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134166Page;
  let fixture: ComponentFixture<S134166Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134166Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134166Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
