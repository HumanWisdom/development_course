import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48062Page } from './s48062.page';

describe('S48062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48062Page;
  let fixture: ComponentFixture<S48062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
