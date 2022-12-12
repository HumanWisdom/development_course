import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49079tPage } from './s49079t.page';

describe('S49079tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49079tPage;
  let fixture: ComponentFixture<S49079tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49079tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49079tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
