import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62149Page } from './s62149.page';

describe('S62149Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62149Page;
  let fixture: ComponentFixture<S62149Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62149Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62149Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
