import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140099Page } from './s140099.page';

describe('S140099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140099Page;
  let fixture: ComponentFixture<S140099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
