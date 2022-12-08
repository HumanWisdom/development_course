import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58070tPage } from './s58070t.page';

describe('S58070tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58070tPage;
  let fixture: ComponentFixture<S58070tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58070tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58070tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
