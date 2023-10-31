import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53107tPage } from './s53107t.page';

describe('S53107tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53107tPage;
  let fixture: ComponentFixture<S53107tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53107tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53107tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
