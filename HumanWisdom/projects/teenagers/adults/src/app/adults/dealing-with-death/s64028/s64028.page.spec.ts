import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64028Page } from './s64028.page';

describe('S64028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64028Page;
  let fixture: ComponentFixture<S64028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
