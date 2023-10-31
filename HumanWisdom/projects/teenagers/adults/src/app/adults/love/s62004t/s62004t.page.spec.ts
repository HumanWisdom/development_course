import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62004tPage } from './s62004t.page';

describe('S62004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62004tPage;
  let fixture: ComponentFixture<S62004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
