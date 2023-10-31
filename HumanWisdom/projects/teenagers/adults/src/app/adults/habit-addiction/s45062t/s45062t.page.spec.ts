import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45062tPage } from './s45062t.page';

describe('S45062tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45062tPage;
  let fixture: ComponentFixture<S45062tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45062tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45062tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
