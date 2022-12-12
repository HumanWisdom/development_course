import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53112Page } from './s53112.page';

describe('S53112Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53112Page;
  let fixture: ComponentFixture<S53112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53112Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
