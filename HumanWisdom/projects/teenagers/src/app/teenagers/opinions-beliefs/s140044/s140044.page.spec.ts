import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140044Page } from './s140044.page';

describe('S140044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140044Page;
  let fixture: ComponentFixture<S140044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
