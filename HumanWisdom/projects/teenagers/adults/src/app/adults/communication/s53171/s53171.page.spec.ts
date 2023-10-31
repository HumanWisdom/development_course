import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53171Page } from './s53171.page';

describe('S53171Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53171Page;
  let fixture: ComponentFixture<S53171Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53171Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53171Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
