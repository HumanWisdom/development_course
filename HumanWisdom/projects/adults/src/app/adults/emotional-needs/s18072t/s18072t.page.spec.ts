import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18072tPage } from './s18072t.page';

describe('S18072tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18072tPage;
  let fixture: ComponentFixture<S18072tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18072tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18072tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
