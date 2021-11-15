import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57019tPage } from './s57019t.page';

describe('S57019tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57019tPage;
  let fixture: ComponentFixture<S57019tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57019tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57019tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
