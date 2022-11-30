import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45105tPage } from './s45105t.page';

describe('S45105tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45105tPage;
  let fixture: ComponentFixture<S45105tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45105tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45105tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
