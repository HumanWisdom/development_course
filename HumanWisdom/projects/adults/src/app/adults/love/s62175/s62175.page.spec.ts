import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62175Page } from './s62175.page';

describe('S62175Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62175Page;
  let fixture: ComponentFixture<S62175Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62175Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62175Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
