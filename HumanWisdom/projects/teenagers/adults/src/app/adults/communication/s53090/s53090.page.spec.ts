import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53090Page } from './s53090.page';

describe('S53090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53090Page;
  let fixture: ComponentFixture<S53090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
