import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53184Page } from './s53184.page';

describe('S53184Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53184Page;
  let fixture: ComponentFixture<S53184Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53184Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53184Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
