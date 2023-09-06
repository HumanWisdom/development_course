import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140096Page } from './s140096.page';

describe('S140096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140096Page;
  let fixture: ComponentFixture<S140096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
