import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134184Page } from './s134184.page';

describe('S134184Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134184Page;
  let fixture: ComponentFixture<S134184Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134184Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134184Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
