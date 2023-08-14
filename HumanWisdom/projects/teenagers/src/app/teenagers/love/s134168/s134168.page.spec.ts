import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134168Page } from './s134168.page';

describe('S134168Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134168Page;
  let fixture: ComponentFixture<S134168Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134168Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134168Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
