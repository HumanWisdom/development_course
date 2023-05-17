import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116057Page } from './s116057.page';

describe('S116057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116057Page;
  let fixture: ComponentFixture<S116057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
