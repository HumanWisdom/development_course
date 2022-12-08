import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57049Page } from './s57049.page';

describe('S57049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57049Page;
  let fixture: ComponentFixture<S57049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
