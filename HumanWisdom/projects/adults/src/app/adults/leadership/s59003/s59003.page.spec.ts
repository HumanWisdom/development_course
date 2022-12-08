import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59003Page } from './s59003.page';

describe('S59003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59003Page;
  let fixture: ComponentFixture<S59003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
