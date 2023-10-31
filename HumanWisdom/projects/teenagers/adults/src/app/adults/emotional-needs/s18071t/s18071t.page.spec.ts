import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18071tPage } from './s18071t.page';

describe('S18071tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18071tPage;
  let fixture: ComponentFixture<S18071tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18071tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18071tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
