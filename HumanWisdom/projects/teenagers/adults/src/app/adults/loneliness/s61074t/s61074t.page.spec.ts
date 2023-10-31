import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61074tPage } from './s61074t.page';

describe('S61074tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61074tPage;
  let fixture: ComponentFixture<S61074tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61074tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61074tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
