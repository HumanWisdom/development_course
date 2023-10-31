import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45137Page } from './s45137.page';

describe('S45137Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45137Page;
  let fixture: ComponentFixture<S45137Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45137Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45137Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
