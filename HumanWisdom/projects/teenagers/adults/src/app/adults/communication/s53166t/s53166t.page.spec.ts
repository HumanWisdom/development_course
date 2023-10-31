import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53166tPage } from './s53166t.page';

describe('S53166tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53166tPage;
  let fixture: ComponentFixture<S53166tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53166tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53166tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
