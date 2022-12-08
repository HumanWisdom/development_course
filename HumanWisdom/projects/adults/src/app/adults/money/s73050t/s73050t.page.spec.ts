import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73050tPage } from './s73050t.page';

describe('S73050tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73050tPage;
  let fixture: ComponentFixture<S73050tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73050tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73050tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
