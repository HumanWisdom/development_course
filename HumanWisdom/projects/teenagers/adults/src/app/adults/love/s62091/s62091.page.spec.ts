import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62091Page } from './s62091.page';

describe('S62091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62091Page;
  let fixture: ComponentFixture<S62091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
