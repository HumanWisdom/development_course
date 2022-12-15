import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48098Page } from './s48098.page';

describe('S48098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48098Page;
  let fixture: ComponentFixture<S48098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
