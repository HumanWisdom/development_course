import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48094Page } from './s48094.page';

describe('S48094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48094Page;
  let fixture: ComponentFixture<S48094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
