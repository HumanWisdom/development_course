import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59095Page } from './s59095.page';

describe('S59095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59095Page;
  let fixture: ComponentFixture<S59095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
