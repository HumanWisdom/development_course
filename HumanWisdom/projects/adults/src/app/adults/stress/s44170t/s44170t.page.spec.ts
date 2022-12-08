import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S44170tPage } from './s44170t.page';

describe('S44170tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S44170tPage;
  let fixture: ComponentFixture<S44170tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S44170tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S44170tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
