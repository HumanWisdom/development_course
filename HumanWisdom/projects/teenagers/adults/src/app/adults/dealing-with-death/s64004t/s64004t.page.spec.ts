import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64004tPage } from './s64004t.page';

describe('S64004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64004tPage;
  let fixture: ComponentFixture<S64004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
