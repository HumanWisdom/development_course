import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132106tPage } from './s132106t.page';

describe('S132106tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132106tPage;
  let fixture: ComponentFixture<S132106tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132106tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132106tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
