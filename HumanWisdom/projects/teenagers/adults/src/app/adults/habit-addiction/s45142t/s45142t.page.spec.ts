import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45142tPage } from './s45142t.page';

describe('S45142tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45142tPage;
  let fixture: ComponentFixture<S45142tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45142tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45142tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
