import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62163tPage } from './s62163t.page';

describe('S62163tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62163tPage;
  let fixture: ComponentFixture<S62163tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62163tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62163tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
