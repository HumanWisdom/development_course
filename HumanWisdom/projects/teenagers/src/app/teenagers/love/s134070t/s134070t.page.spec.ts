import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134070tPage } from './s134070t.page';

describe('S134070tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134070tPage;
  let fixture: ComponentFixture<S134070tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134070tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134070tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
