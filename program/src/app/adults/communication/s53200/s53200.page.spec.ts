import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53200Page } from './s53200.page';

describe('S53200Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53200Page;
  let fixture: ComponentFixture<S53200Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53200Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53200Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
