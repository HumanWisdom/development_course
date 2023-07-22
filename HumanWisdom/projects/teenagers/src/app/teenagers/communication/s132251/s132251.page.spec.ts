import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132251Page } from './s132251.page';

describe('S132251Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132251Page;
  let fixture: ComponentFixture<S132251Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132251Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132251Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
