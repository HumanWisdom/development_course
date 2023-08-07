import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134202Page } from './s134202.page';

describe('S134202Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134202Page;
  let fixture: ComponentFixture<S134202Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134202Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134202Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
