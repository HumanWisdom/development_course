import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117060tPage } from './s117060t.page';

describe('S117060tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117060tPage;
  let fixture: ComponentFixture<S117060tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117060tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117060tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
