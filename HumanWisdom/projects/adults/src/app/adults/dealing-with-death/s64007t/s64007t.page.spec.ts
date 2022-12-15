import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64007tPage } from './s64007t.page';

describe('S64007tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64007tPage;
  let fixture: ComponentFixture<S64007tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64007tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64007tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
