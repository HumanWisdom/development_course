import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53186tPage } from './s53186t.page';

describe('S53186tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53186tPage;
  let fixture: ComponentFixture<S53186tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53186tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53186tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
