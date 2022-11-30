import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73095tPage } from './s73095t.page';

describe('S73095tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73095tPage;
  let fixture: ComponentFixture<S73095tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73095tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73095tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
