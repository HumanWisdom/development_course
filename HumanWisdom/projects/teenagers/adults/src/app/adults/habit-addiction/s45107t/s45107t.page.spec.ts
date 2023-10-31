import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45107tPage } from './s45107t.page';

describe('S45107tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45107tPage;
  let fixture: ComponentFixture<S45107tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45107tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45107tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
