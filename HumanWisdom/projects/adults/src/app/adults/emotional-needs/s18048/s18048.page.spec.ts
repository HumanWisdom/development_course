import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18048Page } from './s18048.page';

describe('S18048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18048Page;
  let fixture: ComponentFixture<S18048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
