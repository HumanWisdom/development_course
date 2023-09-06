import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141004Page } from './s141004.page';

describe('S141004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141004Page;
  let fixture: ComponentFixture<S141004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
