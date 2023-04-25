import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106013Page } from './s106013.page';

describe('S106013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106013Page;
  let fixture: ComponentFixture<S106013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
