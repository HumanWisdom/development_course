import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53180Page } from './s53180.page';

describe('S53180Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53180Page;
  let fixture: ComponentFixture<S53180Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53180Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53180Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
