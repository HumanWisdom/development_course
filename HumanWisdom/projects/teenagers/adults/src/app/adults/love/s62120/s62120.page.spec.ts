import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62120Page } from './s62120.page';

describe('S62120Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62120Page;
  let fixture: ComponentFixture<S62120Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62120Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62120Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
