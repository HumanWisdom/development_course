import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53129Page } from './s53129.page';

describe('S53129Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53129Page;
  let fixture: ComponentFixture<S53129Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53129Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53129Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
