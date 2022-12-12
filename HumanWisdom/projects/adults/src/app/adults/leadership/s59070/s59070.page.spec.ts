import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59070Page } from './s59070.page';

describe('S59070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59070Page;
  let fixture: ComponentFixture<S59070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
