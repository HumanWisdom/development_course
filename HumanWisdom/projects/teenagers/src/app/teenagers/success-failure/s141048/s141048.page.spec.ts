import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141048Page } from './s141048.page';

describe('S141048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141048Page;
  let fixture: ComponentFixture<S141048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
