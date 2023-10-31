import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62057Page } from './s62057.page';

describe('S62057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62057Page;
  let fixture: ComponentFixture<S62057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
