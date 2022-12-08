import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53038tPage } from './s53038t.page';

describe('S53038tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53038tPage;
  let fixture: ComponentFixture<S53038tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53038tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53038tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
