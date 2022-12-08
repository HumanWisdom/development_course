import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53143tPage } from './s53143t.page';

describe('S53143tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53143tPage;
  let fixture: ComponentFixture<S53143tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53143tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53143tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
