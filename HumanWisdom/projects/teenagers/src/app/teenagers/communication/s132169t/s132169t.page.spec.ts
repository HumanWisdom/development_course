import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132169tPage } from './s132169t.page';

describe('S132169tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132169tPage;
  let fixture: ComponentFixture<S132169tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132169tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132169tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
