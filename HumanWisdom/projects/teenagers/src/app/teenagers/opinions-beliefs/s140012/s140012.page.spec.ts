import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140012Page } from './s140012.page';

describe('S140012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140012Page;
  let fixture: ComponentFixture<S140012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
