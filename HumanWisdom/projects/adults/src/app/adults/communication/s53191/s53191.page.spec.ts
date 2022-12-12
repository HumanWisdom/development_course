import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53191Page } from './s53191.page';

describe('S53191Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53191Page;
  let fixture: ComponentFixture<S53191Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53191Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53191Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
