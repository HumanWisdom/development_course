import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62098Page } from './s62098.page';

describe('S62098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62098Page;
  let fixture: ComponentFixture<S62098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
