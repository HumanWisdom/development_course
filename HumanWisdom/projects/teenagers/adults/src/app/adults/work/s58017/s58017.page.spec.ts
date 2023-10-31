import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58017Page } from './s58017.page';

describe('S58017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58017Page;
  let fixture: ComponentFixture<S58017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
