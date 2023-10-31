import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62143Page } from './s62143.page';

describe('S62143Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62143Page;
  let fixture: ComponentFixture<S62143Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62143Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62143Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
