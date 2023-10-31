import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59135Page } from './s59135.page';

describe('S59135Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59135Page;
  let fixture: ComponentFixture<S59135Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59135Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59135Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
