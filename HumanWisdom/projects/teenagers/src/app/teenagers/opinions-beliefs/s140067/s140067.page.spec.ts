import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140067Page } from './s140067.page';

describe('S140067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140067Page;
  let fixture: ComponentFixture<S140067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
