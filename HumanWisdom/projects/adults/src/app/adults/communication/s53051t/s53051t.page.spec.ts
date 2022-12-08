import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53051tPage } from './s53051t.page';

describe('S53051tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53051tPage;
  let fixture: ComponentFixture<S53051tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53051tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53051tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
