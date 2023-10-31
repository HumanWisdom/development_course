import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62077Page } from './s62077.page';

describe('S62077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62077Page;
  let fixture: ComponentFixture<S62077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
