import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18031Page } from './s18031.page';

describe('S18031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18031Page;
  let fixture: ComponentFixture<S18031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
