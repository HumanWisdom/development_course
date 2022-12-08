import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55015Page } from './s55015.page';

describe('S55015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55015Page;
  let fixture: ComponentFixture<S55015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
