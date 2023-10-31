import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73097Page } from './s73097.page';

describe('S73097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73097Page;
  let fixture: ComponentFixture<S73097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
