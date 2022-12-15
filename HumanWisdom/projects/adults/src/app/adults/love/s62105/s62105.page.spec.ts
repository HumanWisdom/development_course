import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62105Page } from './s62105.page';

describe('S62105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62105Page;
  let fixture: ComponentFixture<S62105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
