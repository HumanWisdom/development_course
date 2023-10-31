import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62176Page } from './s62176.page';

describe('S62176Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62176Page;
  let fixture: ComponentFixture<S62176Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62176Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62176Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
