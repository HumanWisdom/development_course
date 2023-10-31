import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59016Page } from './s59016.page';

describe('S59016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59016Page;
  let fixture: ComponentFixture<S59016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
