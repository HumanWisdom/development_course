import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57018Page } from './s57018.page';

describe('S57018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57018Page;
  let fixture: ComponentFixture<S57018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
