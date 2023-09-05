import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140003Page } from './s140003.page';

describe('S140003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140003Page;
  let fixture: ComponentFixture<S140003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
