import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53037tPage } from './s53037t.page';

describe('S53037tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53037tPage;
  let fixture: ComponentFixture<S53037tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53037tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53037tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
