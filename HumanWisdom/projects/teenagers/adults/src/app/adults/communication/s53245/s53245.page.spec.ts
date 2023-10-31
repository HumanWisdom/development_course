import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53245Page } from './s53245.page';

describe('S53245Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53245Page;
  let fixture: ComponentFixture<S53245Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53245Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53245Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
