import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58003tPage } from './s58003t.page';

describe('S58003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58003tPage;
  let fixture: ComponentFixture<S58003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
