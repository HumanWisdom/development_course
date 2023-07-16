import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132121tPage } from './s132121t.page';

describe('S132121tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132121tPage;
  let fixture: ComponentFixture<S132121tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132121tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132121tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
