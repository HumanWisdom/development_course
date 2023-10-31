import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62075Page } from './s62075.page';

describe('S62075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62075Page;
  let fixture: ComponentFixture<S62075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
