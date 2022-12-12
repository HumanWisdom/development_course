import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61006Page } from './s61006.page';

describe('S61006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61006Page;
  let fixture: ComponentFixture<S61006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
