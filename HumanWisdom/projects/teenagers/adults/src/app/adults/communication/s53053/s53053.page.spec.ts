import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53053Page } from './s53053.page';

describe('S53053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53053Page;
  let fixture: ComponentFixture<S53053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
