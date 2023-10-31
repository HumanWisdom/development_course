import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25029tPage } from './s25029t.page';

describe('S25029tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25029tPage;
  let fixture: ComponentFixture<S25029tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25029tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25029tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
