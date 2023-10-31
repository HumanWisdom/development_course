import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57027Page } from './s57027.page';

describe('S57027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57027Page;
  let fixture: ComponentFixture<S57027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
