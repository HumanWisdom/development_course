import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134058Page } from './s134058.page';

describe('S134058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134058Page;
  let fixture: ComponentFixture<S134058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
