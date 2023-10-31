import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53209Page } from './s53209.page';

describe('S53209Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53209Page;
  let fixture: ComponentFixture<S53209Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53209Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53209Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
