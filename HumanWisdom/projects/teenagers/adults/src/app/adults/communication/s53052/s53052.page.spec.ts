import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53052Page } from './s53052.page';

describe('S53052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53052Page;
  let fixture: ComponentFixture<S53052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
