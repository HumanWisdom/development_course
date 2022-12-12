import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18033Page } from './s18033.page';

describe('S18033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18033Page;
  let fixture: ComponentFixture<S18033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
