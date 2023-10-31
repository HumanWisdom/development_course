import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53099tPage } from './s53099t.page';

describe('S53099tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53099tPage;
  let fixture: ComponentFixture<S53099tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53099tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53099tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
