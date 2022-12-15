import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45141Page } from './s45141.page';

describe('S45141Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45141Page;
  let fixture: ComponentFixture<S45141Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45141Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45141Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
