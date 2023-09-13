import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140070Page } from './s140070.page';

describe('S140070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140070Page;
  let fixture: ComponentFixture<S140070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
