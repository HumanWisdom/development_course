import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53174tPage } from './s53174t.page';

describe('S53174tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53174tPage;
  let fixture: ComponentFixture<S53174tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53174tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53174tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
