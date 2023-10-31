import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59017Page } from './s59017.page';

describe('S59017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59017Page;
  let fixture: ComponentFixture<S59017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
