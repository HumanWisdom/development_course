import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53068Page } from './s53068.page';

describe('S53068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53068Page;
  let fixture: ComponentFixture<S53068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
