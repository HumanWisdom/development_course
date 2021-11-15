import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58026p1Page } from './s58026p1.page';

describe('S58026p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58026p1Page;
  let fixture: ComponentFixture<S58026p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58026p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58026p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
