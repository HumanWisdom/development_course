import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62055Page } from './s62055.page';

describe('S62055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62055Page;
  let fixture: ComponentFixture<S62055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
