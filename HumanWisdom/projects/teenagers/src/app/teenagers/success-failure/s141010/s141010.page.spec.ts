import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141010Page } from './s141010.page';

describe('S141010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141010Page;
  let fixture: ComponentFixture<S141010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
