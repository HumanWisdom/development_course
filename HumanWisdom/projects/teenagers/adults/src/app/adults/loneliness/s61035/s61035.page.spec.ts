import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61035Page } from './s61035.page';

describe('S61035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61035Page;
  let fixture: ComponentFixture<S61035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
