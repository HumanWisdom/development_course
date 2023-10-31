import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45075tPage } from './s45075t.page';

describe('S45075tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45075tPage;
  let fixture: ComponentFixture<S45075tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45075tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45075tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
