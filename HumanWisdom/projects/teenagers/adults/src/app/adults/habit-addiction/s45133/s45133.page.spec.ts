import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45133Page } from './s45133.page';

describe('S45133Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45133Page;
  let fixture: ComponentFixture<S45133Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45133Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45133Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
