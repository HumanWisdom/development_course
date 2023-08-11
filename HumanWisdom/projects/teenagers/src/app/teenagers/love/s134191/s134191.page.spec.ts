import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134191Page } from './s134191.page';

describe('S134191Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134191Page;
  let fixture: ComponentFixture<S134191Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134191Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134191Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
