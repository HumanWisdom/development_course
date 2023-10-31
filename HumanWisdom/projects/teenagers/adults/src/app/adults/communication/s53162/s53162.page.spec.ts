import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53162Page } from './s53162.page';

describe('S53162Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53162Page;
  let fixture: ComponentFixture<S53162Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53162Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53162Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
