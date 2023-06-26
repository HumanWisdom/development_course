import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45016tPage } from './s45016t.page';

describe('S45016tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45016tPage;
  let fixture: ComponentFixture<S45016tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45016tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45016tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
