import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57073Page } from './s57073.page';

describe('S57073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57073Page;
  let fixture: ComponentFixture<S57073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
