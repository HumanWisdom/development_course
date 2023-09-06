import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141100Page } from './s141100.page';

describe('S141100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141100Page;
  let fixture: ComponentFixture<S141100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
