import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141036Page } from './s141036.page';

describe('S141036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141036Page;
  let fixture: ComponentFixture<S141036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
