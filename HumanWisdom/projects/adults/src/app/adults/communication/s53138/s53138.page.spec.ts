import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53138Page } from './s53138.page';

describe('S53138Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53138Page;
  let fixture: ComponentFixture<S53138Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53138Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53138Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
