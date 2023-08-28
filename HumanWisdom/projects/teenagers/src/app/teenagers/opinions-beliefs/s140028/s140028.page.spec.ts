import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140028Page } from './s140028.page';

describe('S140028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140028Page;
  let fixture: ComponentFixture<S140028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
