import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57070Page } from './s57070.page';

describe('S57070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57070Page;
  let fixture: ComponentFixture<S57070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
