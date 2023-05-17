import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116061Page } from './s116061.page';

describe('S116061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116061Page;
  let fixture: ComponentFixture<S116061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
