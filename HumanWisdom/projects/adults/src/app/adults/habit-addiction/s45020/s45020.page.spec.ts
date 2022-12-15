import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45020Page } from './s45020.page';

describe('S45020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45020Page;
  let fixture: ComponentFixture<S45020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
