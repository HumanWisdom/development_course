import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141079Page } from './s141079.page';

describe('S141079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141079Page;
  let fixture: ComponentFixture<S141079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
