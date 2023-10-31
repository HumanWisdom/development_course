import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18063Page } from './s18063.page';

describe('S18063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18063Page;
  let fixture: ComponentFixture<S18063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
