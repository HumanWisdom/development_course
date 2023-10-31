import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49061tPage } from './s49061t.page';

describe('S49061tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49061tPage;
  let fixture: ComponentFixture<S49061tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49061tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49061tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
