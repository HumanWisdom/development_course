import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62088Page } from './s62088.page';

describe('S62088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62088Page;
  let fixture: ComponentFixture<S62088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
