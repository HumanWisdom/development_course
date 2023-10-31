import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61051tPage } from './s61051t.page';

describe('S61051tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61051tPage;
  let fixture: ComponentFixture<S61051tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61051tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61051tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
