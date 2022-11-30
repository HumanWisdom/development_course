import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57012Page } from './s57012.page';

describe('S57012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57012Page;
  let fixture: ComponentFixture<S57012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
