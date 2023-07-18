import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132227tPage } from './s132227t.page';

describe('S132227tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132227tPage;
  let fixture: ComponentFixture<S132227tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132227tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132227tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
