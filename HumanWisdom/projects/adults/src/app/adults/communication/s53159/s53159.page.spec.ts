import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53159Page } from './s53159.page';

describe('S53159Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53159Page;
  let fixture: ComponentFixture<S53159Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53159Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53159Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
