import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55057Page } from './s55057.page';

describe('S55057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55057Page;
  let fixture: ComponentFixture<S55057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
