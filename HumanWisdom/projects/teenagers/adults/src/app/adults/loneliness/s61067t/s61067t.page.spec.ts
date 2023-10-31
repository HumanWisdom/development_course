import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61067tPage } from './s61067t.page';

describe('S61067tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61067tPage;
  let fixture: ComponentFixture<S61067tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61067tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61067tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
