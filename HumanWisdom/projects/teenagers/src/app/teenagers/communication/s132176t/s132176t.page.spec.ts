import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132176tPage } from './s132176t.page';

describe('S132176tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132176tPage;
  let fixture: ComponentFixture<S132176tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132176tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132176tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
