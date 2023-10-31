import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49075Page } from './s49075.page';

describe('S49075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49075Page;
  let fixture: ComponentFixture<S49075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
