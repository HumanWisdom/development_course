import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53206Page } from './s53206.page';

describe('S53206Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53206Page;
  let fixture: ComponentFixture<S53206Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53206Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53206Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
