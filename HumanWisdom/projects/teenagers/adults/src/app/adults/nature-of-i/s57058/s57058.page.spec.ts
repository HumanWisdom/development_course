import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57058Page } from './s57058.page';

describe('S57058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57058Page;
  let fixture: ComponentFixture<S57058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
