import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116076tPage } from './s116076t.page';

describe('S116076tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116076tPage;
  let fixture: ComponentFixture<S116076tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116076tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116076tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
