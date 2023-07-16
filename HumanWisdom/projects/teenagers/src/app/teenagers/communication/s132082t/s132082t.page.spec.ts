import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132082tPage } from './s132082t.page';

describe('S132082tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132082tPage;
  let fixture: ComponentFixture<S132082tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132082tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132082tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
