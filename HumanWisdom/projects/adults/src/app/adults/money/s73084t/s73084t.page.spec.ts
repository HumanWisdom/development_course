import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73084tPage } from './s73084t.page';

describe('S73084tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73084tPage;
  let fixture: ComponentFixture<S73084tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73084tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73084tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
