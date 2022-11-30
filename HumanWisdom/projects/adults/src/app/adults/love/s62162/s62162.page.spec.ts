import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62162Page } from './s62162.page';

describe('S62162Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62162Page;
  let fixture: ComponentFixture<S62162Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62162Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62162Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
