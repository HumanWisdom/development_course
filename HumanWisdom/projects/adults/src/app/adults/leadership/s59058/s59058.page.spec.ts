import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59058Page } from './s59058.page';

describe('S59058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59058Page;
  let fixture: ComponentFixture<S59058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
