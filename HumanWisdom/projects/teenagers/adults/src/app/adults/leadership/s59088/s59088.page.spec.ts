import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59088Page } from './s59088.page';

describe('S59088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59088Page;
  let fixture: ComponentFixture<S59088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
