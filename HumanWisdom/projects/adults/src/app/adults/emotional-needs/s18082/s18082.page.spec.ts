import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18082Page } from './s18082.page';

describe('S18082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18082Page;
  let fixture: ComponentFixture<S18082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
