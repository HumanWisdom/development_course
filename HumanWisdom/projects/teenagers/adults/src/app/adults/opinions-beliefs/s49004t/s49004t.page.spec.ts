import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49004tPage } from './s49004t.page';

describe('S49004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49004tPage;
  let fixture: ComponentFixture<S49004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
