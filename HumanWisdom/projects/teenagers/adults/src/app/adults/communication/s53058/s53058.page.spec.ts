import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53058Page } from './s53058.page';

describe('S53058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53058Page;
  let fixture: ComponentFixture<S53058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
