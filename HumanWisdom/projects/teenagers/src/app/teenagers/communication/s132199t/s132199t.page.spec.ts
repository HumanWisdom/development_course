import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132199tPage } from './s132199t.page';

describe('S132199tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132199tPage;
  let fixture: ComponentFixture<S132199tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132199tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132199tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
