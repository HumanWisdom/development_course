import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18050Page } from './s18050.page';

describe('S18050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18050Page;
  let fixture: ComponentFixture<S18050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
