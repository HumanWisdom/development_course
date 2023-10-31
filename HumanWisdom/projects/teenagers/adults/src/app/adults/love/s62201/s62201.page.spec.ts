import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62201Page } from './s62201.page';

describe('S62201Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62201Page;
  let fixture: ComponentFixture<S62201Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62201Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62201Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
