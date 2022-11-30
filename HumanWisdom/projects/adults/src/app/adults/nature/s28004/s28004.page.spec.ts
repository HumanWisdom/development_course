import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28004Page } from './s28004.page';

describe('S28004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28004Page;
  let fixture: ComponentFixture<S28004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
