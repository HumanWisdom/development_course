import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53250Page } from './s53250.page';

describe('S53250Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53250Page;
  let fixture: ComponentFixture<S53250Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53250Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53250Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
