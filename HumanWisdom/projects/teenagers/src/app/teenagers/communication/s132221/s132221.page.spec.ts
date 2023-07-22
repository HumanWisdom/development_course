import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132221Page } from './s132221.page';

describe('S132221Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132221Page;
  let fixture: ComponentFixture<S132221Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132221Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132221Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
