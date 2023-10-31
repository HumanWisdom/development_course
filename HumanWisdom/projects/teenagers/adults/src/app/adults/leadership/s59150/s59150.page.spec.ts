import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59150Page } from './s59150.page';

describe('S59150Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59150Page;
  let fixture: ComponentFixture<S59150Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59150Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59150Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
