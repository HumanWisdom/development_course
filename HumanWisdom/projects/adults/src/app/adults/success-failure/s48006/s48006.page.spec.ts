import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48006Page } from './s48006.page';

describe('S48006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48006Page;
  let fixture: ComponentFixture<S48006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
