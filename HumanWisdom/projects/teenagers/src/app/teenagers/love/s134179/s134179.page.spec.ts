import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134179Page } from './s134179.page';

describe('S134179Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134179Page;
  let fixture: ComponentFixture<S134179Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134179Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134179Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
