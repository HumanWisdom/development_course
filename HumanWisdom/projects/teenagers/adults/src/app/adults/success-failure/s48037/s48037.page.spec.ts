import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48037Page } from './s48037.page';

describe('S48037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48037Page;
  let fixture: ComponentFixture<S48037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
