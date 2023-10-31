import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59063Page } from './s59063.page';

describe('S59063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59063Page;
  let fixture: ComponentFixture<S59063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
