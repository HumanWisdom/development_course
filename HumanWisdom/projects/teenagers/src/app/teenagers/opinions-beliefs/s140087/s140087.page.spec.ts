import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140087Page } from './s140087.page';

describe('S140087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140087Page;
  let fixture: ComponentFixture<S140087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
