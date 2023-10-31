import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59112Page } from './s59112.page';

describe('S59112Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59112Page;
  let fixture: ComponentFixture<S59112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59112Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
