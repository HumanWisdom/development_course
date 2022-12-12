import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53168Page } from './s53168.page';

describe('S53168Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53168Page;
  let fixture: ComponentFixture<S53168Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53168Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53168Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
