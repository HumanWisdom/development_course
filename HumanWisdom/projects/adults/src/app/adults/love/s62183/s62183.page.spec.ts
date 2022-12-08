import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62183Page } from './s62183.page';

describe('S62183Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62183Page;
  let fixture: ComponentFixture<S62183Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62183Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62183Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
