import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53198Page } from './s132199.page';

describe('S53198Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53198Page;
  let fixture: ComponentFixture<S53198Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53198Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53198Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
