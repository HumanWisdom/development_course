import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57043Page } from './s57043.page';

describe('S57043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57043Page;
  let fixture: ComponentFixture<S57043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
