import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140060Page } from './s140060.page';

describe('S140060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140060Page;
  let fixture: ComponentFixture<S140060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
