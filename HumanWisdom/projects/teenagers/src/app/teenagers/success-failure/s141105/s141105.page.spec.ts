import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141105Page } from './s141105.page';

describe('S141105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141105Page;
  let fixture: ComponentFixture<S141105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
