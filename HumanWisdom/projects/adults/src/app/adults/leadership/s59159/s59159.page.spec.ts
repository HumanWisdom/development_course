import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59159Page } from './s59159.page';

describe('S59159Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59159Page;
  let fixture: ComponentFixture<S59159Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59159Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59159Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
