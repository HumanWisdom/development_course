import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132099tPage } from './s132099t.page';

describe('S132099tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132099tPage;
  let fixture: ComponentFixture<S132099tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132099tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132099tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
