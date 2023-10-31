import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73058tPage } from './s73058t.page';

describe('S73058tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73058tPage;
  let fixture: ComponentFixture<S73058tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73058tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73058tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
