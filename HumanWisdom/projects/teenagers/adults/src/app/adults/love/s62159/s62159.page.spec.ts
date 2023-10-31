import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62159Page } from './s62159.page';

describe('S62159Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62159Page;
  let fixture: ComponentFixture<S62159Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62159Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62159Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
