import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141072tPage } from './s141072t.page';

describe('S141072tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141072tPage;
  let fixture: ComponentFixture<S141072tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141072tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141072tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
