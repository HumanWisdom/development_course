import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140081Page } from './s140081.page';

describe('S140081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140081Page;
  let fixture: ComponentFixture<S140081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
