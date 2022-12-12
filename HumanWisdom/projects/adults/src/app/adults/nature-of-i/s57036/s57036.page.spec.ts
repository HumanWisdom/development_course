import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57036Page } from './s57036.page';

describe('S57036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57036Page;
  let fixture: ComponentFixture<S57036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
