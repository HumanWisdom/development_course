import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53004tPage } from './s132004t.page';

describe('S53004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53004tPage;
  let fixture: ComponentFixture<S53004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
