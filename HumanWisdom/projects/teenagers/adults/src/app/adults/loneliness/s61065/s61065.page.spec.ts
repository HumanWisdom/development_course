import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61065Page } from './s61065.page';

describe('S61065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61065Page;
  let fixture: ComponentFixture<S61065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
