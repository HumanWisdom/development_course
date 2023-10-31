import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25010tPage } from './s25010t.page';

describe('S25010tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25010tPage;
  let fixture: ComponentFixture<S25010tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25010tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25010tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
