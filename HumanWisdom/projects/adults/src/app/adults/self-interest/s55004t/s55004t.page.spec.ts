import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55004tPage } from './s55004t.page';

describe('S55004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55004tPage;
  let fixture: ComponentFixture<S55004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
