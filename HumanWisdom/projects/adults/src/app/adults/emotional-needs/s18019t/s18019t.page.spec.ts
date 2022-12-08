import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18019tPage } from './s18019t.page';

describe('S18019tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18019tPage;
  let fixture: ComponentFixture<S18019tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18019tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18019tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
