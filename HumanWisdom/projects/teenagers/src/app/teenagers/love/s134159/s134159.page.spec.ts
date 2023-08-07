import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134159Page } from './s134159.page';

describe('S134159Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134159Page;
  let fixture: ComponentFixture<S134159Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134159Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134159Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
