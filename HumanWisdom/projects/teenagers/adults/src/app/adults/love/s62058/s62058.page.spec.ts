import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62058Page } from './s62058.page';

describe('S62058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62058Page;
  let fixture: ComponentFixture<S62058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
