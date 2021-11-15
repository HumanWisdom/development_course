import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61004Page } from './s61004.page';

describe('S61004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61004Page;
  let fixture: ComponentFixture<S61004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
