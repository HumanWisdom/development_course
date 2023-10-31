import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53226Page } from './s53226.page';

describe('S53226Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53226Page;
  let fixture: ComponentFixture<S53226Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53226Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53226Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
