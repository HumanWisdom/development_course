import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59161Page } from './s59161.page';

describe('S59161Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59161Page;
  let fixture: ComponentFixture<S59161Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59161Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59161Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
