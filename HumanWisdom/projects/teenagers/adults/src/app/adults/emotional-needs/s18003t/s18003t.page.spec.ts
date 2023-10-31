import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18003tPage } from './s18003t.page';

describe('S18003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18003tPage;
  let fixture: ComponentFixture<S18003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
