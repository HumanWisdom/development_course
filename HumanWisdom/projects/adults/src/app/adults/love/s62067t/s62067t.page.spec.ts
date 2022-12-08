import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62067tPage } from './s62067t.page';

describe('S62067tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62067tPage;
  let fixture: ComponentFixture<S62067tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62067tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62067tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
