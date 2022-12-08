import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63004Page } from './s63004.page';

describe('S63004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63004Page;
  let fixture: ComponentFixture<S63004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
