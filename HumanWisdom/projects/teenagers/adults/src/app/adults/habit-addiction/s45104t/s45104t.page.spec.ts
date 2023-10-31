import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45104tPage } from './s45104t.page';

describe('S45104tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45104tPage;
  let fixture: ComponentFixture<S45104tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45104tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45104tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
