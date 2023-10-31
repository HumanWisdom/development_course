import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53044Page } from './s53044.page';

describe('S53044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53044Page;
  let fixture: ComponentFixture<S53044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
