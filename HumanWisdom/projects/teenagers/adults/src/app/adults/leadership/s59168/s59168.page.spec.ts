import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59168Page } from './s59168.page';

describe('S59168Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59168Page;
  let fixture: ComponentFixture<S59168Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59168Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59168Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
