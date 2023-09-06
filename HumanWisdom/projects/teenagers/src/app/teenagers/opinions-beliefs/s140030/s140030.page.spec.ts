import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140030Page } from './s140030.page';

describe('S140030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140030Page;
  let fixture: ComponentFixture<S140030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
