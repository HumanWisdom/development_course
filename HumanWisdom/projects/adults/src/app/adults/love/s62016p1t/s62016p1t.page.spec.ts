import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62016p1tPage } from './s62016p1t.page';

describe('S62016p1tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62016p1tPage;
  let fixture: ComponentFixture<S62016p1tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62016p1tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62016p1tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
