import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140063Page } from './s140063.page';

describe('S140063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140063Page;
  let fixture: ComponentFixture<S140063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
