import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53088Page } from './s53088.page';

describe('S53088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53088Page;
  let fixture: ComponentFixture<S53088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
