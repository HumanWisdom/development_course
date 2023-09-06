import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140054Page } from './s140054.page';

describe('S140054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140054Page;
  let fixture: ComponentFixture<S140054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
