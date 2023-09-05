import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141071Page } from './s141071.page';

describe('S141071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141071Page;
  let fixture: ComponentFixture<S141071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
