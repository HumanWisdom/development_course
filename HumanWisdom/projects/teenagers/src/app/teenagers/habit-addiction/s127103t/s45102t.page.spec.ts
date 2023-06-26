import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45102tPage } from './s45102t.page';

describe('S45102tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45102tPage;
  let fixture: ComponentFixture<S45102tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45102tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45102tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
