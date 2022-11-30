import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45106tPage } from './s45106t.page';

describe('S45106tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45106tPage;
  let fixture: ComponentFixture<S45106tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45106tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45106tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
