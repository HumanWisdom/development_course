import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62138Page } from './s62138.page';

describe('S62138Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62138Page;
  let fixture: ComponentFixture<S62138Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62138Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62138Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
