import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53036Page } from './s53036.page';

describe('S53036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53036Page;
  let fixture: ComponentFixture<S53036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
