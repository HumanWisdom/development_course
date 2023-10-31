import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S54010tPage } from './s54010t.page';

describe('S54010tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54010tPage;
  let fixture: ComponentFixture<S54010tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54010tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54010tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
