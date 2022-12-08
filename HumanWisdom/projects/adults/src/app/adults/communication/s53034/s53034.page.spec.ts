import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53034Page } from './s53034.page';

describe('S53034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53034Page;
  let fixture: ComponentFixture<S53034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
