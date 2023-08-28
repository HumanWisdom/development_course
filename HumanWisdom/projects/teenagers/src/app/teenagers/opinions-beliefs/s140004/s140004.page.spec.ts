import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140004Page } from './s140004.page';

describe('S140004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140004Page;
  let fixture: ComponentFixture<S140004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
