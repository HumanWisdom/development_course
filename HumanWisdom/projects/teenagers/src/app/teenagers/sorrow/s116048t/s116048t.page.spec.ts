import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116048tPage } from './s116048t.page';

describe('S116048tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116048tPage;
  let fixture: ComponentFixture<S116048tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116048tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116048tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
