import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53045Page } from './s53045.page';

describe('S53045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53045Page;
  let fixture: ComponentFixture<S53045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
