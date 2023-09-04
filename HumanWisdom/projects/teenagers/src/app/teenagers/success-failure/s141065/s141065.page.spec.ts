import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141065Page } from './s141065.page';

describe('S141065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141065Page;
  let fixture: ComponentFixture<S141065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
