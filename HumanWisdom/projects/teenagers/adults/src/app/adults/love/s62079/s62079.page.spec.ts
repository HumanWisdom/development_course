import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62079Page } from './s62079.page';

describe('S62079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62079Page;
  let fixture: ComponentFixture<S62079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
