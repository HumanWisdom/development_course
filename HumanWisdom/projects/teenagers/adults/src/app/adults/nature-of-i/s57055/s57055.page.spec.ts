import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57055Page } from './s57055.page';

describe('S57055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57055Page;
  let fixture: ComponentFixture<S57055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
