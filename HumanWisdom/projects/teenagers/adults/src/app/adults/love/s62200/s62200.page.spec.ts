import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62200Page } from './s62200.page';

describe('S62200Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62200Page;
  let fixture: ComponentFixture<S62200Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62200Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62200Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
