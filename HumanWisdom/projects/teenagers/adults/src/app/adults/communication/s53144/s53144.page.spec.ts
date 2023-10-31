import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53144Page } from './s53144.page';

describe('S53144Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53144Page;
  let fixture: ComponentFixture<S53144Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53144Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53144Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
