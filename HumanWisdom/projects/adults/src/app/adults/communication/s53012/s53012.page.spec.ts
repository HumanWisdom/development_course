import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53012Page } from './s53012.page';

describe('S53012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53012Page;
  let fixture: ComponentFixture<S53012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
