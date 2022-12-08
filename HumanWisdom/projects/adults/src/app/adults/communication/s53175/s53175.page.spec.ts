import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53175Page } from './s53175.page';

describe('S53175Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53175Page;
  let fixture: ComponentFixture<S53175Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53175Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53175Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
