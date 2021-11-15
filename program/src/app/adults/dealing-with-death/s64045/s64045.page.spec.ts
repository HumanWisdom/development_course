import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64045Page } from './s64045.page';

describe('S64045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64045Page;
  let fixture: ComponentFixture<S64045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
