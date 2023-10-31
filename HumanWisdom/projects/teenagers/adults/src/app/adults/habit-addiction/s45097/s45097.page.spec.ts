import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45097Page } from './s45097.page';

describe('S45097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45097Page;
  let fixture: ComponentFixture<S45097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
