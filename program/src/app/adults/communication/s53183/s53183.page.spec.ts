import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53183Page } from './s53183.page';

describe('S53183Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53183Page;
  let fixture: ComponentFixture<S53183Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53183Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53183Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
