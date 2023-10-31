import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62206Page } from './s62206.page';

describe('S62206Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62206Page;
  let fixture: ComponentFixture<S62206Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62206Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62206Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
