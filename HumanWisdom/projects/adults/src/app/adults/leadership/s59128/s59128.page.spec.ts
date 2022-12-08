import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59128Page } from './s59128.page';

describe('S59128Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59128Page;
  let fixture: ComponentFixture<S59128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59128Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
