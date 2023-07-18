import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132200tPage } from './s132200t.page';

describe('S132200tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132200tPage;
  let fixture: ComponentFixture<S132200tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132200tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132200tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
