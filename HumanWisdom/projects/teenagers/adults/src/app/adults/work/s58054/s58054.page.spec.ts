import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58054Page } from './s58054.page';

describe('S58054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58054Page;
  let fixture: ComponentFixture<S58054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
