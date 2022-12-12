import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55042Page } from './s55042.page';

describe('S55042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55042Page;
  let fixture: ComponentFixture<S55042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
