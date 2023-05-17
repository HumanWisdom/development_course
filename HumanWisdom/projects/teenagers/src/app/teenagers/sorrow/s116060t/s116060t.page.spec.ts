import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116060tPage } from './s116060t.page';

describe('S116060tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116060tPage;
  let fixture: ComponentFixture<S116060tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116060tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116060tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
