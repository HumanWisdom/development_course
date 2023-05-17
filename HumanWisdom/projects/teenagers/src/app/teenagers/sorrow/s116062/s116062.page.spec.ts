import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116062Page } from './s116062.page';

describe('S116062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116062Page;
  let fixture: ComponentFixture<S116062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
