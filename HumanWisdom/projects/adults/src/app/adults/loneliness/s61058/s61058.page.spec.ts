import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61058Page } from './s61058.page';

describe('S61058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61058Page;
  let fixture: ComponentFixture<S61058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
