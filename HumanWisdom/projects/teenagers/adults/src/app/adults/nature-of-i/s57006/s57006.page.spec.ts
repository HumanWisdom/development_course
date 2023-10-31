import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57006Page } from './s57006.page';

describe('S57006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57006Page;
  let fixture: ComponentFixture<S57006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
