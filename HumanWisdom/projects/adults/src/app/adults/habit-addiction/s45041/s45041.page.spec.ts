import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45041Page } from './s45041.page';

describe('S45041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45041Page;
  let fixture: ComponentFixture<S45041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
