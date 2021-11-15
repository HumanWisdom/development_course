import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48015Page } from './s48015.page';

describe('S48015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48015Page;
  let fixture: ComponentFixture<S48015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
