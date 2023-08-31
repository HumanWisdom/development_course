import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140004tPage } from './s140004t.page';

describe('S140004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140004tPage;
  let fixture: ComponentFixture<S140004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
