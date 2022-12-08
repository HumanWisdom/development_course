import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45100tPage } from './s45100t.page';

describe('S45100tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45100tPage;
  let fixture: ComponentFixture<S45100tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45100tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45100tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
