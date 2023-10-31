import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46070tPage } from './s46070t.page';

describe('S46070tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46070tPage;
  let fixture: ComponentFixture<S46070tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46070tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46070tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
