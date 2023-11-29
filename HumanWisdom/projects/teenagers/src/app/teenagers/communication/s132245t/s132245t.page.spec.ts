import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132245tPage } from './s132245t.page';

describe('S132245tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132245tPage;
  let fixture: ComponentFixture<S132245tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132245tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132245tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
