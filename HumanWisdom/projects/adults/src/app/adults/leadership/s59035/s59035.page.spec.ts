import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59035Page } from './s59035.page';

describe('S59035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59035Page;
  let fixture: ComponentFixture<S59035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
