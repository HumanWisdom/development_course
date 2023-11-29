import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132210Page } from './s132210.page';

describe('S132210Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132210Page;
  let fixture: ComponentFixture<S132210Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132210Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132210Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
