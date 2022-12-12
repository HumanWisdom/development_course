import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57043tPage } from './s57043t.page';

describe('S57043tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57043tPage;
  let fixture: ComponentFixture<S57043tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57043tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57043tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
