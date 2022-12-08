import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53061Page } from './s53061.page';

describe('S53061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53061Page;
  let fixture: ComponentFixture<S53061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
