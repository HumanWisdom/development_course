import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53042Page } from './s53042.page';

describe('S53042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53042Page;
  let fixture: ComponentFixture<S53042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
