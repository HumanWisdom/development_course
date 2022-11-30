import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53124tPage } from './s53124t.page';

describe('S53124tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53124tPage;
  let fixture: ComponentFixture<S53124tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53124tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53124tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
