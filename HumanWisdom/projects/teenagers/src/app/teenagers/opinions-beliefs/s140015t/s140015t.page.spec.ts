import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140015tPage } from './s140015t.page';

describe('S140015tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140015tPage;
  let fixture: ComponentFixture<S140015tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140015tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140015tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
