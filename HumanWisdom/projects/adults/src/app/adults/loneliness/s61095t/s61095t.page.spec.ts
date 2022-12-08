import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61095tPage } from './s61095t.page';

describe('S61095tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61095tPage;
  let fixture: ComponentFixture<S61095tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61095tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61095tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
