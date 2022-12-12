import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58013tPage } from './s58013t.page';

describe('S58013tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58013tPage;
  let fixture: ComponentFixture<S58013tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58013tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58013tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
