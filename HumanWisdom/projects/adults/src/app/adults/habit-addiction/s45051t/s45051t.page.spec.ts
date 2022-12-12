import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45051tPage } from './s45051t.page';

describe('S45051tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45051tPage;
  let fixture: ComponentFixture<S45051tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45051tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45051tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
