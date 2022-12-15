import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53218tPage } from './s53218t.page';

describe('S53218tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53218tPage;
  let fixture: ComponentFixture<S53218tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53218tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53218tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
