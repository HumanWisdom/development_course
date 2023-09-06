import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141075Page } from './s141075.page';

describe('S141075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141075Page;
  let fixture: ComponentFixture<S141075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
