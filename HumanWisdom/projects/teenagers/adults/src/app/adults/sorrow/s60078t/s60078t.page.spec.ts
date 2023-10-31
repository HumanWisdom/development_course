import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60078tPage } from './s60078t.page';

describe('S60078tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60078tPage;
  let fixture: ComponentFixture<S60078tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60078tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60078tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
