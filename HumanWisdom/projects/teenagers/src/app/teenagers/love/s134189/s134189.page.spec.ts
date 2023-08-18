import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134189Page } from './s134189.page';

describe('S134189Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134189Page;
  let fixture: ComponentFixture<S134189Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134189Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134189Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
