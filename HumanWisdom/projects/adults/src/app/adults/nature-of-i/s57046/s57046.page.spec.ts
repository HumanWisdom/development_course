import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57046Page } from './s57046.page';

describe('S57046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57046Page;
  let fixture: ComponentFixture<S57046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
