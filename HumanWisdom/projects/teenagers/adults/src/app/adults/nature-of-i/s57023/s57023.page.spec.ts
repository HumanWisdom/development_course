import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57023Page } from './s57023.page';

describe('S57023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57023Page;
  let fixture: ComponentFixture<S57023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
