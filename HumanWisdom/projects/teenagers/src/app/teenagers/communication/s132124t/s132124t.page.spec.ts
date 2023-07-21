import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132124tPage } from './s132124t.page';

describe('S132124tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132124tPage;
  let fixture: ComponentFixture<S132124tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132124tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132124tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
