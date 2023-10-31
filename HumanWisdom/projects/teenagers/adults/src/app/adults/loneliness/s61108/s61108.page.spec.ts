import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61108Page } from './s61108.page';

describe('S61108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61108Page;
  let fixture: ComponentFixture<S61108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
