import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48049Page } from './s48049.page';

describe('S48049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48049Page;
  let fixture: ComponentFixture<S48049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
