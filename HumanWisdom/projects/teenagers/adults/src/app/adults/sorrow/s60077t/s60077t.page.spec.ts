import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60077tPage } from './s60077t.page';

describe('S60077tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60077tPage;
  let fixture: ComponentFixture<S60077tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60077tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60077tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
