import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25012Page } from './s25012.page';

describe('S25012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25012Page;
  let fixture: ComponentFixture<S25012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
