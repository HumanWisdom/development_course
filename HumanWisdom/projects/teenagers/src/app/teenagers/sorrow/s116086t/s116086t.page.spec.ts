import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116086tPage } from './s116086t.page';

describe('S116086tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116086tPage;
  let fixture: ComponentFixture<S116086tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116086tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116086tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
