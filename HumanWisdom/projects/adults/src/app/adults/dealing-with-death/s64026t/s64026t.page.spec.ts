import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64026tPage } from './s64026t.page';

describe('S64026tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64026tPage;
  let fixture: ComponentFixture<S64026tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64026tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64026tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
