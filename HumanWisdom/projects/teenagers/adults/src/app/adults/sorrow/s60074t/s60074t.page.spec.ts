import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60074tPage } from './s60074t.page';

describe('S60074tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60074tPage;
  let fixture: ComponentFixture<S60074tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60074tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60074tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
