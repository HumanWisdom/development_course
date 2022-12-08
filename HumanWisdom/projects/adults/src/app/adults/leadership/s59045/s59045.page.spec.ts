import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59045Page } from './s59045.page';

describe('S59045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59045Page;
  let fixture: ComponentFixture<S59045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
