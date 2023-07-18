import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132196tPage } from './s132196t.page';

describe('S132196tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132196tPage;
  let fixture: ComponentFixture<S132196tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132196tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132196tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
