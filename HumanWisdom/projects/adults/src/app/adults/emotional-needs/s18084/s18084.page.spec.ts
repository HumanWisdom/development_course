import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18084Page } from './s18084.page';

describe('S18084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18084Page;
  let fixture: ComponentFixture<S18084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
