import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49095Page } from './s49095.page';

describe('S49095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49095Page;
  let fixture: ComponentFixture<S49095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
