import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59132Page } from './s59132.page';

describe('S59132Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59132Page;
  let fixture: ComponentFixture<S59132Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59132Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59132Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
