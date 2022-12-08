import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62041Page } from './s62041.page';

describe('S62041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62041Page;
  let fixture: ComponentFixture<S62041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
