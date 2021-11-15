import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58010tPage } from './s58010t.page';

describe('S58010tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58010tPage;
  let fixture: ComponentFixture<S58010tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58010tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58010tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
