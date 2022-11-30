import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59090Page } from './s59090.page';

describe('S59090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59090Page;
  let fixture: ComponentFixture<S59090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
