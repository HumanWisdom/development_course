import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132219tPage } from './s132219t.page';

describe('S132219tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132219tPage;
  let fixture: ComponentFixture<S132219tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132219tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132219tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
