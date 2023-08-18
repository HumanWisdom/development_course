import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134053Page } from './s134053.page';

describe('S134053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134053Page;
  let fixture: ComponentFixture<S134053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
