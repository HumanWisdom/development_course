import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18076Page } from './s18076.page';

describe('S18076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18076Page;
  let fixture: ComponentFixture<S18076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
