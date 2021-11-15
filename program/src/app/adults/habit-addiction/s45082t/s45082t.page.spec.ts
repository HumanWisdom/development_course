import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45082tPage } from './s45082t.page';

describe('S45082tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45082tPage;
  let fixture: ComponentFixture<S45082tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45082tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45082tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
