import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53199tPage } from './s53199t.page';

describe('S53199tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53199tPage;
  let fixture: ComponentFixture<S53199tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53199tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53199tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
