import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55035Page } from './s55035.page';

describe('S55035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55035Page;
  let fixture: ComponentFixture<S55035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
