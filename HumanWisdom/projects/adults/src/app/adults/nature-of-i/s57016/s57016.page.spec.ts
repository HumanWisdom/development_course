import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57016Page } from './s57016.page';

describe('S57016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57016Page;
  let fixture: ComponentFixture<S57016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
