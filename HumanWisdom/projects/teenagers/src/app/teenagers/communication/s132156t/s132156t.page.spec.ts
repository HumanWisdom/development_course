import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132156tPage } from './s132156t.page';

describe('S132156tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132156tPage;
  let fixture: ComponentFixture<S132156tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132156tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132156tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
