import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53137Page } from './s53137.page';

describe('S53137Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53137Page;
  let fixture: ComponentFixture<S53137Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53137Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53137Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
