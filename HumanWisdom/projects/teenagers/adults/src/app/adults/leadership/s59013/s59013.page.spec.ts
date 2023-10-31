import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59013Page } from './s59013.page';

describe('S59013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59013Page;
  let fixture: ComponentFixture<S59013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
