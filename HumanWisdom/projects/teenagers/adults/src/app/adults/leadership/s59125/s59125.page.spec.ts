import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59125Page } from './s59125.page';

describe('S59125Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59125Page;
  let fixture: ComponentFixture<S59125Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59125Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59125Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
