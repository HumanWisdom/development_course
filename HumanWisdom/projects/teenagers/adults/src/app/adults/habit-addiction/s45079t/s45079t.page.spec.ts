import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45079tPage } from './s45079t.page';

describe('S45079tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45079tPage;
  let fixture: ComponentFixture<S45079tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45079tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45079tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
