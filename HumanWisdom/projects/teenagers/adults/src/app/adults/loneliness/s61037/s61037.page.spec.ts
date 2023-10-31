import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61037Page } from './s61037.page';

describe('S61037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61037Page;
  let fixture: ComponentFixture<S61037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
