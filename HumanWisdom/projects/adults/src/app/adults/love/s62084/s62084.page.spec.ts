import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62084Page } from './s62084.page';

describe('S62084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62084Page;
  let fixture: ComponentFixture<S62084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
