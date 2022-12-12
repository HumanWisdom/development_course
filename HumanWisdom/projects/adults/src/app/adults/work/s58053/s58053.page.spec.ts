import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58053Page } from './s58053.page';

describe('S58053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58053Page;
  let fixture: ComponentFixture<S58053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
