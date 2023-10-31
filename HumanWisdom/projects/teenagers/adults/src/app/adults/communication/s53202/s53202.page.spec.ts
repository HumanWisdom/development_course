import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53202Page } from './s53202.page';

describe('S53202Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53202Page;
  let fixture: ComponentFixture<S53202Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53202Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53202Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
