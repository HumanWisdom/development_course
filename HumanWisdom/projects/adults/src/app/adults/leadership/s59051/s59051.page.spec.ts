import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59051Page } from './s59051.page';

describe('S59051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59051Page;
  let fixture: ComponentFixture<S59051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
