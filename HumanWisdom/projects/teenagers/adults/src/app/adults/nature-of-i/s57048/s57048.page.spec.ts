import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57048Page } from './s57048.page';

describe('S57048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57048Page;
  let fixture: ComponentFixture<S57048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
