import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62202Page } from './s62202.page';

describe('S62202Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62202Page;
  let fixture: ComponentFixture<S62202Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62202Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62202Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
