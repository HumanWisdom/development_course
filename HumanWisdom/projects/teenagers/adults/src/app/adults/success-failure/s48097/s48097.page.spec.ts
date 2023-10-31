import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48097Page } from './s48097.page';

describe('S48097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48097Page;
  let fixture: ComponentFixture<S48097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
