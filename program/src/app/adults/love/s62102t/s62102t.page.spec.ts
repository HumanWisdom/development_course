import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62102tPage } from './s62102t.page';

describe('S62102tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62102tPage;
  let fixture: ComponentFixture<S62102tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62102tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62102tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
