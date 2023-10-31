import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49015tPage } from './s49015t.page';

describe('S49015tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49015tPage;
  let fixture: ComponentFixture<S49015tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49015tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49015tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
