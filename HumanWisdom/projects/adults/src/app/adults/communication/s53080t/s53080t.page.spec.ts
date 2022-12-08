import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53080tPage } from './s53080t.page';

describe('S53080tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53080tPage;
  let fixture: ComponentFixture<S53080tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53080tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53080tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
