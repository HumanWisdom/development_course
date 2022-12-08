import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58074Page } from './s58074.page';

describe('S58074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58074Page;
  let fixture: ComponentFixture<S58074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
