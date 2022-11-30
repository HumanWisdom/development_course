import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59151Page } from './s59151.page';

describe('S59151Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59151Page;
  let fixture: ComponentFixture<S59151Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59151Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59151Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
