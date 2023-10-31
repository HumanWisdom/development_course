import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73078tPage } from './s73078t.page';

describe('S73078tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73078tPage;
  let fixture: ComponentFixture<S73078tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73078tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73078tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
