import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141052tPage } from './s141052t.page';

describe('S141052tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141052tPage;
  let fixture: ComponentFixture<S141052tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141052tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141052tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
