import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59158Page } from './s59158.page';

describe('S59158Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59158Page;
  let fixture: ComponentFixture<S59158Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59158Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59158Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
