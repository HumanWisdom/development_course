import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53188Page } from './s53188.page';

describe('S53188Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53188Page;
  let fixture: ComponentFixture<S53188Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53188Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53188Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
